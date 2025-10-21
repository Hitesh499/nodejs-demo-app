pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')  // Jenkins credential ID
        IMAGE_NAME = 'hiteshdarshan261/nodejs-demo-app'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${IMAGE_NAME}:latest .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                        sh 'docker push ${IMAGE_NAME}:latest'
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Stop old container if running and start new one
                    sh '''
                    docker stop nodejs-app || true
                    docker rm nodejs-app || true
                    docker run -d -p 3000:3000 --name nodejs-app ${IMAGE_NAME}:latest
                    '''
                }
            }
        }
    }

    post {
        always {
            echo '✅ Pipeline completed!'
        }
    }
}

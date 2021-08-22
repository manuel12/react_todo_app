pipeline {
  agent {
    docker {
      image 'cypress/base:12'
      args '-u root:root'
    }
  }

  stages {
    stage('Download the dependencies') {
      steps {
        sh "npm install"
      }
    }
  }

  stages {
    stage('Build and test') {
      steps {
        sh "build:and:test"
      }
    }
  }
}
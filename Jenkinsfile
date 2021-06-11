pipeline {
  agent any
    
  tools {nodejs "NodeJS 16.2.0"}
    
  stages {
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
    
    stage('build docker') {
      steps {
        sh 'docker build -t raguramansirius/vanilla-2 --pull=true /Users/raguramank/.jenkins/workspace/vanilla-2'
        sh 'docker push raguramansirius/vanilla-2'
      }
    }  
    
  }
}
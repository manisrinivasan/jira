wget http://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-6.3.14.tar.gz 
tar -xvf atlassian-jira-6.3.14.tar.gz  
cd atlassian-jira-6.3.14-standalone/
mkdir ~/Documents/jira/testproject
echo ~/Documents/jira/testproject >> atlassian-jira/WEB-INF/classes/jira-application.properties
export JIRA_HOME=~/Documents/jira/testproject
bin/startup.sh

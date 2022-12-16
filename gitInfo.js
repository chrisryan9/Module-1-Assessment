/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = "Git is a version control system that is a locally ran software to manage and revise changes to code. Git can be via online using hosts such as GitHub. Using gits internal commands and tools you can navigate through terminals and use git commands to save and upload projects to GitHub to either be viewed or allow other developers to pull your code and work on it as well."


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

const gitHubDefinition = "GitHub is utilized as a component of Git and acts as an online repository or cloud service to store and upload project files. This is where collaboration can be done from a central location."


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE


const gitInitDefinition = "Git init is a git command that will initialize a new git repository."


//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE


const gitCloneDefinition = "git clone is a git command that will clone the existing repository."


//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE


const gitStatusDefinition = "The git status command displays the state of the working directory. It will show you the changes that have been staged, the ones that have not, and which files are not being tracked by git."


//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE


const gitAddDefinition = "The git add command adds a change in the working directory to the staging area. Although, the changes are not actually recorded until you run git commit."

const gitAddCode = "git add -A"


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE


const gitCommitDefinition = "The git commit command saves all work that it was told to save. This is basically a snapshot of the current place you are working."

const gitCommitCode = `git commit -m "initial commit"`



//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE


const gitPushDefinition = "The git push command will send (or push) the commits from your local branch in your git repository to the remote repository."
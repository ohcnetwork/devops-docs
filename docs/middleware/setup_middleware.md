# Roadmap for Setting Up Middleware Jumpserver

1. Spin up a VM in GCP (use IAM Based authentication)
2. create a user named `middleware-user`
4. Clone [Ansible scripts](github.com/10bedicu/middleware-ansible) to home directory.
5. Install ansible by running `pip install -r requirements.txt`
6. Save the SSH-Key with access to the middlewares in `~/.ssh` folder
7. Run the playbook by `ansible-playbook -i inventory/hosts.yml edit.yml -u username` 
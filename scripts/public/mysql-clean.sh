#!/bin/bash

# TODO: make this interactive on the CLI for manual mysql user and password entry

#####################
#  script template  #
#####################

# copy to scripts/private and fill out with pertinent secrets as needed
# when updating the private script, copy sanitized changes to this file
# before checking in
# don't forget to do `chmod +x` on the private file when first created

echo "private mysql clean script >> enter mysql password for user '<database-user-name>' when prompted"

mysql -u <database-user-name> -p -e "source <path/to/queris/file>" <mysql_database_name>
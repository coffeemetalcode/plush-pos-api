#!/bin/bash

#####################
#  script template  #
#####################

# copy to scripts/private and fill out with pertinent secrets as needed
# when updating the private script, copy sanitized changes to this file
# before checking in
# don't forget to do `chmod +x` on the private file when first created

echo "private sqlite clean script"

sqlite3 <sqlite.database.name> ".read <path/to/queries/file>" .quit
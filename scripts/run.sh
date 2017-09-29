#!/bin/bash -e
# chmod a+x run.sh

# BRANCH=${TRAVIS_BRANCH:-$(git rev-parse --abbrev-ref HEAD)}
BRANCH="master"
ACTION=$1

if [[ $BRANCH == 'master' ]]; then
  STAGE="dev"
elif [[ $BRANCH == 'production' ]]; then
  STAGE="prod"
fi

if [ -z ${STAGE+x} ]; then
  echo "Not running changes";
  exit 0;
fi

echo "Run ${ACTION} from branch [$BRANCH] to stage [$STAGE]"

SLS_DEBUG=* sls ${ACTION} -v --stage ${STAGE}

EXIT_CODE=$?

exit $EXIT_CODE
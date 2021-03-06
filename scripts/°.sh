if [ -z "$(ls -A src/o-os)" ]; then
    git clone https://github.com/omoearth/o-os.git src/o-os
else
   git fetch src/o-os
fi


if [ -z "$(ls -A src/o-design-system)" ]; then
    git clone https://github.com/omoearth/o-design-system.git src/o-design-system
else
   git fetch src/o-design-system
fi



if [ -z "$(ls -A src/dapps/o-dentity)" ]; then
    git clone https://github.com/omoearth/o-dapp-odentity.git src/dapps/o-dentity
else
    git fetch src/dapps/o-dentity
fi


if [ -z "$(ls -A src/libraries/o-circles-protocol)" ]; then
    git clone https://github.com/omoearth/o-circles-protocol.git src/libraries/o-circles-protocol
else
   git fetch src/libraries/o-circles-protocol
fi



if [ -z "$(ls -A src/dapps/o-market)" ]; then
    git clone https://github.com/omoearth/o-dapp-market.git src/dapps/o-market
else
    git fetch src/dapps/o-market
fi



if [ -z "$(ls -A src/dapps/o-wallet)" ]; then
    git clone https://github.com/omoearth/o-dapp-wallet.git src/dapps/o-wallet
else
    git fetch src/dapps/o-wallet
fi


if [ -z "$(ls -A src/dapps/o-friends)" ]; then
    git clone https://github.com/omoearth/o-dapp-friends.git src/dapps/o-friends
else
    git fetch src/dapps/o-friends
fi

if [ -z "$(ls -A src/dapps/o-textile-hub)" ]; then
    git clone https://github.com/omoearth/o-dapp-textile-hub.git src/dapps/o-textile-hub
else
    git fetch src/dapps/o-textile-hub
fi

if [ -z "$(ls -A src/dapps/o-website)" ]; then
    git clone https://github.com/omoearth/o-dapp-website.git src/dapps/o-website
else
    git fetch src/dapps/o-website
fi


if [ -z "$(ls -A src/services/o-ipfs)" ]; then
    git clone https://github.com/omoearth/o-service-ipfs.git src/services/o-ipfs  
else
    git fetch src/services/o-ipfs
fi


if [ -z "$(ls -A src/o-types)" ]; then
    git clone https://github.com/omoearth/o-types.git src/o-types  
else
    git fetch src/o-types
fi


if [ -z "$(ls -A o-recycle)" ]; then
    git clone https://github.com/omoearth/o-recycle.git o-recycle  
else
    git fetch o-recycle
fi




git fetch

echo "° ready"
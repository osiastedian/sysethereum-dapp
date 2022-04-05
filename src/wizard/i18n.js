import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'genericError': 'Something went wrong with the request, please try again...',
        'tabGeneral':'General',
        'tabAdvanced':'Advanced',
        'introHead': 'Welcome to the official Syscoin to NEVM Bridge wizard!',
        'introDescription': 'This is a wizard for a bridge',
        'txidLabel': 'Transaction ID',
        'step1': 'Step 1',
        'step2': 'Step 2',
        'step3': 'Step 3',
        'step4': 'Step 4',
        'step1es': 'Step 1',
        'step2es': 'Step 2',
        'step3es': 'Step 3',
        'step1esc': 'Cancel Transfer',
        'step1reg': 'Asset Registry',
        'step1fs': 'Fast Swap',
        'step1sx': 'Step 1',
        'step2sx': 'Step 2',
        'step1xs': 'Step 1',
        'step2xs': 'Step 2',
        'repoUrl': 'https://github.com/syscoin/sysethereum-contracts',
        'nextTextOnFinalActionStep': 'Finish',
        'nextButtonText': 'Next',
        'backButtonText': 'Back',
        'stepUseMainnet': 'Please configure your metamask to connect to the correct network',
        'step1Head': 'Welcome to the official Syscoin to NEVM Bridge wizard!',
        'step1Description': '<p><em>This is a wizard for a bridge for tokens on Syscoin as SPTs to move to Syscoin NEVM trustlessly.</em></p> <p>An SPV proof of the SPT burn transaction is required to move to Syscoin NEVM.</p><p> <strong>Please enter details about which asset to move to Syscoin NEVM:</strong></p> Enter <code>123456</code> for <code className="blue">Asset GUID</code> if moving Syscoin (SYSX) over otherwise enter the GUID you are moving to NEVM.',
        'step1SXHead': 'Welcome to the official Syscoin to SYSX Wizard',
        'step1SXDescription': '<em>This is a mechanism for users of Syscoin to convert SYS into SYSX (SPT version of SYS) so they can later use the bridge or Z-DAG functionality with their SYSX.</em>',
        'step1XSHead': 'Welcome to the official SYSX to Syscoin Wizard',
        'step1XSDescription': '<em>This is a mechanism for users of Syscoin to convert SYSX into SYS.</em>',
        'step1Faucet': 'Generating a transaction on the NEVM requires a small amount of gas. Use the faucet to get some here:',
        'step1ESHead': 'Welcome to the official NEVM to Syscoin Bridge wizard!',
        'step1ESDescription': '<p><em>This is a wizard for a bridge for tokens on NEVM to move to Syscoin trustlessly.</em></p> <p>An SPV proof of the NEVM burn transaction is required to move back to Syscoin.</p><p> <strong>Please enter details about which asset to move back to Syscoin:</strong></p> Enter <code>123456</code> for <code className="blue">Asset GUID</code> if moving Syscoin over otherwise enter the GUID of the Asset token you are moving back to Syscoin.',
        'step1ESFromAccountLabel': 'NEVM account',
        'step1ESEnterFromAccount': 'Enter your NEVM token address...',
        'step1ESWitnessAddressLabel': 'Syscoin Address',
        'step1ESEnterWitnessAddress': 'Enter receiving Syscoin address...',
        'step1FSInputMissing': 'Amount or destination address not provided',
        'step1FSInvalidDestination': 'Invalid destination address (check the type of network you are sending from/to)',
        'step1InvalidNEVM': 'Invalid NEVM address',
        'step1FSStatus': 'Status',
        'step1FSAmount': 'Amount',
        'step1FSDestinationAddress': 'Destination Address',
        'step1FSType': 'Type',
        'step1FSSrcTx': 'Source Tx',
        'step1FSDstTx': 'Destination Tx',
        'step1ESButton': 'Burn',
        'step1ESCERC': 'ERC20 Token Contract',
        'step1ESCFreezer': 'ERC20 Token Account',
        'step1ESCSPT': 'Syscoin SPT',
        'step1ESCStatus': 'Bridge Transfer Status',
        'step1RegHead': 'Asset Registry',
        'step1RegDescription': 'In order to use the bridge from NEVM->SYS, the Asset (SPT) needs to be registered in the ERC20Manager so it knows the correlation between the SPT and the ERC20 token contract associated with it. Because of this, the contract must be sent a valid Syscoin transaction of when the SPT was updated with the contract field populated. Anyone can send this information to the contract by clicking on the Update Registry below once you have entered the Syscoin TXID of the SPT Transaction. Note: Gas fees in NEVM apply. You may also search for existing registry entries by entering the SPT Guid. The contract as well as the Syscoin block height (in which the SPT transaction was mined) will be given to the user.',
        'step1RegWrongAsset':  'Could not find in Asset Registry, try a different Asset Guid',
        'step1RegEnterAssetTx': 'Enter the Transaction ID of the Syscoin Transaction where the contract field was last updated for an SPT',
        'step1RegStatusSuccess': 'SPV Proofs were sucessfully saved! Proceed with NEVM transaction now...',
        'step1RegUpdateButton': 'Update Registry',
        'step1RegSearchBox': 'Search Registry',
        'step1FSHead': 'Fast Swap',
        'step1FSDescription': 'This provides a quick way to bridge Syscoin across between the UTXO and the NEVM chains. To use EasySwap please fill out the amount, and destination address to the chain you are moving to. For example if you are coming from SYS (UTXO) to go to the NEVM, this would be your NEVM address, and vice versa. Once you have filled these fields out click on either the <b>Send UTXO(SYS)</b> or <b>Send NEVM(SYS)</b> buttons depending on your desired destination (Sending coins on UTXO means you are moving to NEVM and sending coins on NEVM means you are moving to UTXO). Once you have done that you may initiate or view an existing swap by clicking on the <b>Initiate or Check Swap</b> button.',
        'step1FSWrongTx':  'Could not find Swap, try a different Transaction ID',
        'step1FSEnterTx': 'Enter the Transaction ID of the Syscoin Transaction where the Syscoin were sent to one of the designated addresses in the description above',
        'step1FSSendNEVM': 'Swap SYS(NEVM) to SYS(UTXO)',
        'step1FSSendUTXO': 'Swap SYS(UTXO) to SYS(NEVM)',
        'step1FSEnterAmount': 'Enter Amount',
        'step1FSEnterDestination': 'Enter Destination Address',
        'step1FSMissingTxid': 'Missing Transaction ID',
        'step1FSStartButton': 'Initiate or Check Swap',
        'step1FSStatusComplete': 'Complete',
        'step1FSStatusReceived': 'Coins Received, waiting for chainlock...',
        'step1FSStatusSent': 'Coins Sent, waiting for chainlock...',
        'step1FSStatusUnknown': 'Uknown state',
        'step1FSInsufficientBalanceNEVM': 'Insufficient NEVM balance',
        'step1FSInsufficientBalanceSYS': 'Insufficient SYS balance',
        'step1FSMinAmount': 'Amount too little, minimum amount is 1 SYS',
        'step1FSNoSettings': 'Could not download EasySwap settings from server',
        'step2ESHead': '<em className="step">Step 2:</em> Build a Syscoin Mint transaction',
        'step2ESDescription': 'Please enter the Transaction ID from your NEVM burn transaction below if it is not already auto-filled.<br/> Click Generate to create the raw unsigned transaction before proceeding to the next step. Note to ensure that the burn transaction on NEVM was adequately settled, you will have to wait atleast 1 confirmation before you are able to proceed with this step and create the mint transaction on Syscoin.',
        'step2ESEnterTxid': 'Enter NEVM Transaction Hash (Txid)...',
        'step2ESTxid': 'A valid NEVM TXID is required',
        'step2ESInvalidProof': 'Invalid Transaction Proof - Error: ',
        'step2Asset': 'A valid Syscoin Asset GUID is required',
        'step2AssetLabel': 'Asset GUID',
        'step2RawTx': 'A valid Syscoin transaction is required',
        'step2TxLabel': "Syscoin Burn TXID",
        'step2Amount': 'A valid amount is required',
        'step2EthAddress': 'A valid NEVM address is required',
        'step2EthAddressLabel': 'NEVM Address',
        'step2FundingAddress': 'A valid Syscoin address is required',
        'step2EnterAsset': 'Enter Asset GUID here if applicable...',
        'step2EnterAmount': 'Amount to transfer...',
        'step2AmountLabel': 'Amount',
        'step2EnterEthAddress': 'NEVM address of recipient...',
        'step1Button': "Burn",
        'step2InstallPali': 'Please install Pali to submit SPV proof to Syscoin...',
        'step2UnlockPali': 'Please unlock your Pali wallet and try again...',
        'step2SelectPaliAccount': 'Please select an account in Pali to use for submitting an SPV proof to Syscoin...',
        'step2EnterTx': 'Enter Syscoin Burn TXID...',
        'step2Head':  '<em className="step">Step 2:</em> Complete!',
        'step2Description': 'The button below will get the Syscoin Transaction SPV proof from Syscoin Core. You may need to wait for 1 confirmation (2.5 minutes) before proceeding...',
        'step2Button': 'Get SPV Proofs',
        'step2ButtonEnter': 'Please get SPV Proofs before proceeding',
        'step2StatusSuccess': 'SPV Proofs were sucessfully saved! Please proceed to click on the "Next" button below',
        'step2SXHead': '<em className="step">Step 2:</em> Complete!',
        'step2SXDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your SYSX.<br/> You can view your transaction here: ',
        'step2XSHead': '<em className="step">Step 2:</em> Complete!',
        'step2XSDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your SYS.<br/> You can view your transaction here: ',
        'step3ESHead': '<em className="step">Step 3:</em> Complete!',
        'step3ESDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your Syscoin or Syscoin Asset through the Syscoin network.<br/> You can view your transaction here: ',
        'step3Head': '<em className="step">Step 3:</em> Submit SPV Proof to NEVM',
        'step3Description': 'The button below will submit the SPV proofs to the relay contract.',
        'step3Button': 'Submit SPV Proofs',
        'step3InstallMetamask': 'Please install Metamask to submit SPV proof to NEVM...',
        'step3LoginMetamask': 'Please login to Metamask and try again...',
        'step3AuthMetamask': 'Authorizing with Metamask...',
        'step3InsufficientTokenBalance': 'Insufficient token balance to cover the request...',
        'step3AuthAllowanceMetamask': 'Authorizing token allowance with Metamask...',
        'step3Success': 'Success!',
        'step3PleaseWait': 'Please wait while the transaction is being mined...',
        'step3ReceiptStatus': 'Status',
        'step3ReceiptTxHash': 'Transaction ID',
        'step3ReceiptTxIndex': 'Transaction Index',
        'step3ReceiptFrom': 'From',
        'step3ReceiptTo': 'To',
        'step3ErrorEVMCheckLog': 'Transaction was rejected by the EVM! Please check the transaction receipt for more details',
        'step3ReceiptBlockhash': 'Blockhash',  
        'step3ReceiptBlocknumber': 'Block Number',  
        'step3ReceiptTotalGas': 'Cumulative Gas Used',  
        'step3ReceiptGas': 'Gas Used',
        'step3ReceiptConfirmations': 'Confirmations',
        'step3Download': 'Download Receipt Log',
        'step3ErrorEventCheckLog': 'Error! Cannot find TokenUnfreeze event in Transaction Receipt. Please check the Receipt Log for more details',
        'step4Head': '<em className="step">Step 4:</em> Complete!',
        'step4Description': 'Transaction was successfully completed. You now can use your Syscoin SPT on the NEVM network through an ERC20. You can view your transaction here: '
      }
    },
    es: {
      translations: {
        'genericError': 'Something went wrong with the request, please try again...',
        'tabGeneral':'General',
        'tabAdvanced':'Advanced',
        'introHead': 'Welcome to the official Syscoin to NEVM Bridge wizard!',
        'introDescription': 'This is a wizard for a bridge',
        'txidLabel': 'Transaction ID',
        'step1': 'Step 1',
        'step2': 'Step 2',
        'step3': 'Step 3',
        'step4': 'Step 4',
        'step1es': 'Step 1',
        'step2es': 'Step 2',
        'step3es': 'Step 3',
        'step1esc': 'Cancel Transfer',
        'step1reg': 'Asset Registry',
        'step1fs': 'Fast Swap',
        'step1sx': 'Step 1',
        'step2sx': 'Step 2',
        'step1xs': 'Step 1',
        'step2xs': 'Step 2',
        'repoUrl': 'https://github.com/syscoin/sysethereum-contracts',
        'nextTextOnFinalActionStep': 'Finish',
        'nextButtonText': 'Next',
        'backButtonText': 'Back',
        'stepUseMainnet': 'Please configure your metamask to connect to the correct network',
        'step1Head': 'Welcome to the official Syscoin to NEVM Bridge wizard!',
        'step1Description': '<p><em>This is a wizard for a bridge for tokens on Syscoin as SPTs to move to Syscoin NEVM trustlessly.</em></p> <p>An SPV proof of the SPT burn transaction is required to move to Syscoin NEVM.</p><p> <strong>Please enter details about which asset to move to Syscoin NEVM:</strong></p> Enter <code>123456</code> for <code className="blue">Asset GUID</code> if moving Syscoin (SYSX) over otherwise enter the GUID you are moving to NEVM.',
        'step1SXHead': 'Welcome to the official Syscoin to SYSX Wizard',
        'step1SXDescription': '<em>This is a mechanism for users of Syscoin to convert SYS into SYSX (SPT version of SYS) so they can later use the bridge or Z-DAG functionality with their SYSX.</em>',
        'step1XSHead': 'Welcome to the official SYSX to Syscoin Wizard',
        'step1XSDescription': '<em>This is a mechanism for users of Syscoin to convert SYSX into SYS.</em>',
        'step1Faucet': 'Generating a transaction on the NEVM requires a small amount of gas. Use the faucet to get some here:',
        'step1ESHead': 'Welcome to the official NEVM to Syscoin Bridge wizard!',
        'step1ESDescription': '<p><em>This is a wizard for a bridge for tokens on NEVM to move to Syscoin trustlessly.</em></p> <p>An SPV proof of the NEVM burn transaction is required to move back to Syscoin.</p><p> <strong>Please enter details about which asset to move back to Syscoin:</strong></p> Enter <code>123456</code> for <code className="blue">Asset GUID</code> if moving Syscoin over otherwise enter the GUID of the Asset token you are moving back to Syscoin.',
        'step1ESFromAccountLabel': 'NEVM account',
        'step1ESEnterFromAccount': 'Enter your NEVM token address...',
        'step1ESWitnessAddressLabel': 'Syscoin Address',
        'step1ESEnterWitnessAddress': 'Enter receiving Syscoin address...',
        'step1FSInputMissing': 'Amount or destination address not provided',
        'step1FSInvalidDestination': 'Invalid destination address (check the type of network you are sending from/to)',
        'step1InvalidNEVM': 'Invalid NEVM address',
        'step1FSStatus': 'Status',
        'step1FSAmount': 'Amount',
        'step1FSDestinationAddress': 'Destination Address',
        'step1FSType': 'Type',
        'step1FSSrcTx': 'Source Tx',
        'step1FSDstTx': 'Destination Tx',
        'step1ESButton': 'Burn',
        'step1ESCERC': 'ERC20 Token Contract',
        'step1ESCFreezer': 'ERC20 Token Account',
        'step1ESCSPT': 'Syscoin SPT',
        'step1ESCStatus': 'Bridge Transfer Status',
        'step1RegHead': 'Asset Registry',
        'step1RegDescription': 'In order to use the bridge from NEVM->SYS, the Asset (SPT) needs to be registered in the ERC20Manager so it knows the correlation between the SPT and the ERC20 token contract associated with it. Because of this, the contract must be sent a valid Syscoin transaction of when the SPT was updated with the contract field populated. Anyone can send this information to the contract by clicking on the Update Registry below once you have entered the Syscoin TXID of the SPT Transaction. Note: Gas fees in NEVM apply. You may also search for existing registry entries by entering the SPT Guid. The contract as well as the Syscoin block height (in which the SPT transaction was mined) will be given to the user.',
        'step1RegWrongAsset':  'Could not find in Asset Registry, try a different Asset Guid',
        'step1RegEnterAssetTx': 'Enter the Transaction ID of the Syscoin Transaction where the contract field was last updated for an SPT',
        'step1RegStatusSuccess': 'SPV Proofs were sucessfully saved! Proceed with NEVM transaction now...',
        'step1RegUpdateButton': 'Update Registry',
        'step1RegSearchBox': 'Search Registry',
        'step1FSHead': 'Fast Swap',
        'step1FSDescription': 'This provides a quick way to bridge Syscoin across between the UTXO and the NEVM chains. To use EasySwap please fill out the amount, and destination address to the chain you are moving to. For example if you are coming from SYS (UTXO) to go to the NEVM, this would be your NEVM address, and vice versa. Once you have filled these fields out click on either the <b>Send UTXO(SYS)</b> or <b>Send NEVM(SYS)</b> buttons depending on your desired destination (Sending coins on UTXO means you are moving to NEVM and sending coins on NEVM means you are moving to UTXO). Once you have done that you may initiate or view an existing swap by clicking on the <b>Initiate or Check Swap</b> button.',
        'step1FSWrongTx':  'Could not find Swap, try a different Transaction ID',
        'step1FSEnterTx': 'Enter the Transaction ID of the Syscoin Transaction where the Syscoin were sent to one of the designated addresses in the description above',
        'step1FSSendNEVM': 'Send SYS(NEVM)',
        'step1FSSendUTXO': 'Send SYS(UTXO)',
        'step1FSEnterAmount': 'Enter Amount',
        'step1FSEnterDestination': 'Enter Destination Address',
        'step1FSMissingTxid': 'Missing Transaction ID',
        'step1FSStartButton': 'Initiate or Check Swap',
        'step1FSStatusComplete': 'Complete',
        'step1FSStatusReceived': 'Coins Received, waiting for chainlock...',
        'step1FSStatusSent': 'Coins Sent, waiting for chainlock...',
        'step1FSStatusUnknown': 'Uknown state',
        'step1FSInsufficientBalanceNEVM': 'Insufficient NEVM balance',
        'step1FSInsufficientBalanceSYS': 'Insufficient SYS balance',
        'step1FSMinAmount': 'Amount too little, minimum amount is 1 SYS',
        'step1FSNoSettings': 'Could not download EasySwap settings from server',
        'step2ESHead': '<em className="step">Step 2:</em> Build a Syscoin Mint transaction',
        'step2ESDescription': 'Please enter the Transaction ID from your NEVM burn transaction below if it is not already auto-filled.<br/> Click Generate to create the raw unsigned transaction before proceeding to the next step. Note to ensure that the burn transaction on NEVM was adequately settled, you will have to wait atleast 1 confirmation before you are able to proceed with this step and create the mint transaction on Syscoin.',
        'step2ESEnterTxid': 'Enter NEVM Transaction Hash (Txid)...',
        'step2ESTxid': 'A valid NEVM TXID is required',
        'step2ESInvalidProof': 'Invalid Transaction Proof - Error: ',
        'step2Asset': 'A valid Syscoin Asset GUID is required',
        'step2AssetLabel': 'Asset GUID',
        'step2RawTx': 'A valid Syscoin transaction is required',
        'step2TxLabel': "Syscoin Burn TXID",
        'step2Amount': 'A valid amount is required',
        'step2EthAddress': 'A valid NEVM address is required',
        'step2EthAddressLabel': 'NEVM Address',
        'step2FundingAddress': 'A valid Syscoin address is required',
        'step2EnterAsset': 'Enter Asset GUID here if applicable...',
        'step2EnterAmount': 'Amount to transfer...',
        'step2AmountLabel': 'Amount',
        'step2EnterEthAddress': 'NEVM address of recipient...',
        'step1Button': "Burn",
        'step2InstallPali': 'Please install Pali to submit SPV proof to Syscoin...',
        'step2UnlockPali': 'Please unlock your Pali wallet and try again...',
        'step2SelectPaliAccount': 'Please select an account in Pali to use for submitting an SPV proof to Syscoin...',
        'step2EnterTx': 'Enter Syscoin Burn TXID...',
        'step2Head':  '<em className="step">Step 2:</em> Complete!',
        'step2Description': 'The button below will get the Syscoin Transaction SPV proof from Syscoin Core. You may need to wait for 1 confirmation (2.5 minutes) before proceeding...',
        'step2Button': 'Get SPV Proofs',
        'step2ButtonEnter': 'Please get SPV Proofs before proceeding',
        'step2StatusSuccess': 'SPV Proofs were sucessfully saved! Please proceed to click on the "Next" button below',
        'step2SXHead': '<em className="step">Step 2:</em> Complete!',
        'step2SXDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your SYSX.<br/> You can view your transaction here: ',
        'step2XSHead': '<em className="step">Step 2:</em> Complete!',
        'step2XSDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your SYS.<br/> You can view your transaction here: ',
        'step3ESHead': '<em className="step">Step 3:</em> Complete!',
        'step3ESDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your Syscoin or Syscoin Asset through the Syscoin network.<br/> You can view your transaction here: ',
        'step3Head': '<em className="step">Step 3:</em> Submit SPV Proof to NEVM',
        'step3Description': 'The button below will submit the SPV proofs to the relay contract.',
        'step3Button': 'Submit SPV Proofs',
        'step3InstallMetamask': 'Please install Metamask to submit SPV proof to NEVM...',
        'step3LoginMetamask': 'Please login to Metamask and try again...',
        'step3AuthMetamask': 'Authorizing with Metamask...',
        'step3InsufficientTokenBalance': 'Insufficient token balance to cover the request...',
        'step3AuthAllowanceMetamask': 'Authorizing token allowance with Metamask...',
        'step3Success': 'Success!',
        'step3PleaseWait': 'Please wait while the transaction is being mined...',
        'step3ReceiptStatus': 'Status',
        'step3ReceiptTxHash': 'Transaction ID',
        'step3ReceiptTxIndex': 'Transaction Index',
        'step3ReceiptFrom': 'From',
        'step3ReceiptTo': 'To',
        'step3ErrorEVMCheckLog': 'Transaction was rejected by the EVM! Please check the transaction receipt for more details',
        'step3ReceiptBlockhash': 'Blockhash',  
        'step3ReceiptBlocknumber': 'Block Number',  
        'step3ReceiptTotalGas': 'Cumulative Gas Used',  
        'step3ReceiptGas': 'Gas Used',
        'step3ReceiptConfirmations': 'Confirmations',
        'step3Download': 'Download Receipt Log',
        'step3ErrorEventCheckLog': 'Error! Cannot find TokenUnfreeze event in Transaction Receipt. Please check the Receipt Log for more details',
        'step4Head': '<em className="step">Step 4:</em> Complete!',
        'step4Description': 'Transaction was successfully completed. You now can use your Syscoin SPT on the NEVM network through an ERC20. You can view your transaction here: '
      }
    },
    fr: {
      translations: {
        'genericError': 'Something went wrong with the request, please try again...',
        'tabGeneral':'General',
        'tabAdvanced':'Advanced',
        'introHead': 'Welcome to the official Syscoin to NEVM Bridge wizard!',
        'introDescription': 'This is a wizard for a bridge',
        'txidLabel': 'Transaction ID',
        'step1': 'Step 1',
        'step2': 'Step 2',
        'step3': 'Step 3',
        'step4': 'Step 4',
        'step1es': 'Step 1',
        'step2es': 'Step 2',
        'step3es': 'Step 3',
        'step1esc': 'Cancel Transfer',
        'step1reg': 'Asset Registry',
        'step1fs': 'Fast Swap',
        'step1sx': 'Step 1',
        'step2sx': 'Step 2',
        'step1xs': 'Step 1',
        'step2xs': 'Step 2',
        'repoUrl': 'https://github.com/syscoin/sysethereum-contracts',
        'nextTextOnFinalActionStep': 'Finish',
        'nextButtonText': 'Next',
        'backButtonText': 'Back',
        'stepUseMainnet': 'Please configure your metamask to connect to the correct network',
        'step1Head': 'Welcome to the official Syscoin to NEVM Bridge wizard!',
        'step1Description': '<p><em>This is a wizard for a bridge for tokens on Syscoin as SPTs to move to Syscoin NEVM trustlessly.</em></p> <p>An SPV proof of the SPT burn transaction is required to move to Syscoin NEVM.</p><p> <strong>Please enter details about which asset to move to Syscoin NEVM:</strong></p> Enter <code>123456</code> for <code className="blue">Asset GUID</code> if moving Syscoin (SYSX) over otherwise enter the GUID you are moving to NEVM.',
        'step1SXHead': 'Welcome to the official Syscoin to SYSX Wizard',
        'step1SXDescription': '<em>This is a mechanism for users of Syscoin to convert SYS into SYSX (SPT version of SYS) so they can later use the bridge or Z-DAG functionality with their SYSX.</em>',
        'step1XSHead': 'Welcome to the official SYSX to Syscoin Wizard',
        'step1XSDescription': '<em>This is a mechanism for users of Syscoin to convert SYSX into SYS.</em>',
        'step1Faucet': 'Generating a transaction on the NEVM requires a small amount of gas. Use the faucet to get some here:',
        'step1ESHead': 'Welcome to the official NEVM to Syscoin Bridge wizard!',
        'step1ESDescription': '<p><em>This is a wizard for a bridge for tokens on NEVM to move to Syscoin trustlessly.</em></p> <p>An SPV proof of the NEVM burn transaction is required to move back to Syscoin.</p><p> <strong>Please enter details about which asset to move back to Syscoin:</strong></p> Enter <code>123456</code> for <code className="blue">Asset GUID</code> if moving Syscoin over otherwise enter the GUID of the Asset token you are moving back to Syscoin.',
        'step1ESFromAccountLabel': 'NEVM account',
        'step1ESEnterFromAccount': 'Enter your NEVM token address...',
        'step1ESWitnessAddressLabel': 'Syscoin Address',
        'step1ESEnterWitnessAddress': 'Enter receiving Syscoin address...',
        'step1FSInputMissing': 'Amount or destination address not provided',
        'step1FSInvalidDestination': 'Invalid destination address (check the type of network you are sending from/to)',
        'step1InvalidNEVM': 'Invalid NEVM address',
        'step1FSStatus': 'Status',
        'step1FSAmount': 'Amount',
        'step1FSDestinationAddress': 'Destination Address',
        'step1FSType': 'Type',
        'step1FSSrcTx': 'Source Tx',
        'step1FSDstTx': 'Destination Tx',
        'step1ESButton': 'Burn',
        'step1ESCERC': 'ERC20 Token Contract',
        'step1ESCFreezer': 'ERC20 Token Account',
        'step1ESCSPT': 'Syscoin SPT',
        'step1ESCStatus': 'Bridge Transfer Status',
        'step1RegHead': 'Asset Registry',
        'step1RegDescription': 'In order to use the bridge from NEVM->SYS, the Asset (SPT) needs to be registered in the ERC20Manager so it knows the correlation between the SPT and the ERC20 token contract associated with it. Because of this, the contract must be sent a valid Syscoin transaction of when the SPT was updated with the contract field populated. Anyone can send this information to the contract by clicking on the Update Registry below once you have entered the Syscoin TXID of the SPT Transaction. Note: Gas fees in NEVM apply. You may also search for existing registry entries by entering the SPT Guid. The contract as well as the Syscoin block height (in which the SPT transaction was mined) will be given to the user.',
        'step1RegWrongAsset':  'Could not find in Asset Registry, try a different Asset Guid',
        'step1RegEnterAssetTx': 'Enter the Transaction ID of the Syscoin Transaction where the contract field was last updated for an SPT',
        'step1RegStatusSuccess': 'SPV Proofs were sucessfully saved! Proceed with NEVM transaction now...',
        'step1RegUpdateButton': 'Update Registry',
        'step1RegSearchBox': 'Search Registry',
        'step1FSHead': 'Fast Swap',
        'step1FSDescription': 'This provides a quick way to bridge Syscoin across between the UTXO and the NEVM chains. To use EasySwap please fill out the amount, and destination address to the chain you are moving to. For example if you are coming from SYS (UTXO) to go to the NEVM, this would be your NEVM address, and vice versa. Once you have filled these fields out click on either the <b>Send UTXO(SYS)</b> or <b>Send NEVM(SYS)</b> buttons depending on your desired destination (Sending coins on UTXO means you are moving to NEVM and sending coins on NEVM means you are moving to UTXO). Once you have done that you may initiate or view an existing swap by clicking on the <b>Initiate or Check Swap</b> button.',
        'step1FSWrongTx':  'Could not find Swap, try a different Transaction ID',
        'step1FSEnterTx': 'Enter the Transaction ID of the Syscoin Transaction where the Syscoin were sent to one of the designated addresses in the description above',
        'step1FSSendNEVM': 'Send SYS(NEVM)',
        'step1FSSendUTXO': 'Send SYS(UTXO)',
        'step1FSEnterAmount': 'Enter Amount',
        'step1FSEnterDestination': 'Enter Destination Address',
        'step1FSMissingTxid': 'Missing Transaction ID',
        'step1FSStartButton': 'Initiate or Check Swap',
        'step1FSStatusComplete': 'Complete',
        'step1FSStatusReceived': 'Coins Received, waiting for chainlock...',
        'step1FSStatusSent': 'Coins Sent, waiting for chainlock...',
        'step1FSStatusUnknown': 'Uknown state',
        'step1FSInsufficientBalanceNEVM': 'Insufficient NEVM balance',
        'step1FSInsufficientBalanceSYS': 'Insufficient SYS balance',
        'step1FSMinAmount': 'Amount too little, minimum amount is 1 SYS',
        'step1FSNoSettings': 'Could not download EasySwap settings from server',
        'step2ESHead': '<em className="step">Step 2:</em> Build a Syscoin Mint transaction',
        'step2ESDescription': 'Please enter the Transaction ID from your NEVM burn transaction below if it is not already auto-filled.<br/> Click Generate to create the raw unsigned transaction before proceeding to the next step. Note to ensure that the burn transaction on NEVM was adequately settled, you will have to wait atleast 1 confirmation before you are able to proceed with this step and create the mint transaction on Syscoin.',
        'step2ESEnterTxid': 'Enter NEVM Transaction Hash (Txid)...',
        'step2ESTxid': 'A valid NEVM TXID is required',
        'step2ESInvalidProof': 'Invalid Transaction Proof - Error: ',
        'step2Asset': 'A valid Syscoin Asset GUID is required',
        'step2AssetLabel': 'Asset GUID',
        'step2RawTx': 'A valid Syscoin transaction is required',
        'step2TxLabel': "Syscoin Burn TXID",
        'step2Amount': 'A valid amount is required',
        'step2EthAddress': 'A valid NEVM address is required',
        'step2EthAddressLabel': 'NEVM Address',
        'step2FundingAddress': 'A valid Syscoin address is required',
        'step2EnterAsset': 'Enter Asset GUID here if applicable...',
        'step2EnterAmount': 'Amount to transfer...',
        'step2AmountLabel': 'Amount',
        'step2EnterEthAddress': 'NEVM address of recipient...',
        'step1Button': "Burn",
        'step2InstallPali': 'Please install Pali to submit SPV proof to Syscoin...',
        'step2UnlockPali': 'Please unlock your Pali wallet and try again...',
        'step2SelectPaliAccount': 'Please select an account in Pali to use for submitting an SPV proof to Syscoin...',
        'step2EnterTx': 'Enter Syscoin Burn TXID...',
        'step2Head':  '<em className="step">Step 2:</em> Complete!',
        'step2Description': 'The button below will get the Syscoin Transaction SPV proof from Syscoin Core. You may need to wait for 1 confirmation (2.5 minutes) before proceeding...',
        'step2Button': 'Get SPV Proofs',
        'step2ButtonEnter': 'Please get SPV Proofs before proceeding',
        'step2StatusSuccess': 'SPV Proofs were sucessfully saved! Please proceed to click on the "Next" button below',
        'step2SXHead': '<em className="step">Step 2:</em> Complete!',
        'step2SXDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your SYSX.<br/> You can view your transaction here: ',
        'step2XSHead': '<em className="step">Step 2:</em> Complete!',
        'step2XSDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your SYS.<br/> You can view your transaction here: ',
        'step3ESHead': '<em className="step">Step 3:</em> Complete!',
        'step3ESDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your Syscoin or Syscoin Asset through the Syscoin network.<br/> You can view your transaction here: ',
        'step3Head': '<em className="step">Step 3:</em> Submit SPV Proof to NEVM',
        'step3Description': 'The button below will submit the SPV proofs to the relay contract.',
        'step3Button': 'Submit SPV Proofs',
        'step3InstallMetamask': 'Please install Metamask to submit SPV proof to NEVM...',
        'step3LoginMetamask': 'Please login to Metamask and try again...',
        'step3AuthMetamask': 'Authorizing with Metamask...',
        'step3InsufficientTokenBalance': 'Insufficient token balance to cover the request...',
        'step3AuthAllowanceMetamask': 'Authorizing token allowance with Metamask...',
        'step3Success': 'Success!',
        'step3PleaseWait': 'Please wait while the transaction is being mined...',
        'step3ReceiptStatus': 'Status',
        'step3ReceiptTxHash': 'Transaction ID',
        'step3ReceiptTxIndex': 'Transaction Index',
        'step3ReceiptFrom': 'From',
        'step3ReceiptTo': 'To',
        'step3ErrorEVMCheckLog': 'Transaction was rejected by the EVM! Please check the transaction receipt for more details',
        'step3ReceiptBlockhash': 'Blockhash',  
        'step3ReceiptBlocknumber': 'Block Number',  
        'step3ReceiptTotalGas': 'Cumulative Gas Used',  
        'step3ReceiptGas': 'Gas Used',
        'step3ReceiptConfirmations': 'Confirmations',
        'step3Download': 'Download Receipt Log',
        'step3ErrorEventCheckLog': 'Error! Cannot find TokenUnfreeze event in Transaction Receipt. Please check the Receipt Log for more details',
        'step4Head': '<em className="step">Step 4:</em> Complete!',
        'step4Description': 'Transaction was successfully completed. You now can use your Syscoin SPT on the NEVM network through an ERC20. You can view your transaction here: '
      }
    }
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n;

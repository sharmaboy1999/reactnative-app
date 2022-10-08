import React, { Component } from 'react'
import { Text } from 'react-native'
import RNHTMLtoPDF from 'react-native-html-to-pdf'

export class Pdfgeneration extends Component {
  render() {
    async function createPDF() {
      let options = {
        html: '<h1>PDF SAMPLE</h1>',
        fileName: 'sample',
        directory: 'Documents',
      };

      let file = await RNHTMLtoPDF.convert(options)
      // console.log(file.filePath);
      alert(file.filePath);
    }
    return (
      <Text onPress={createPDF}>make pdf</Text>
    )
  }
}

export default Pdfgeneration
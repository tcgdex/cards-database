/* eslint-disable max-statements */
import { FileFunction } from './compilerInterfaces'
import { promises as fs } from 'fs'
import { DB_PATH, fetchRemoteFile, smartGlob } from './utils/util'
import { objectValues } from '@dzeio/object-util'
import { SupportedLanguages } from '../../interfaces'
import { getSets } from './utils/setUtil'

const LANGS: Array<SupportedLanguages> = ['en', 'fr', 'es', 'it', 'pt', 'de']

const DIST_FOLDER = './generated'

process.env.DEBUG = 'true'

;(async () => {
	console.log(await getSets(undefined, 'de'))

})()

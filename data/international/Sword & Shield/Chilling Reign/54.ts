import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		'en-us': "Galarian Slowpoke",
		'fr-fr': "Ramoloss de Galar",
		'es-es': "Slowpoke de Galar",
		'it-it': "Slowpoke di Galar",
		'pt-br': "Slowpoke de Galar",
		'de-de': "Galar-Flegmon"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Sharpness",
			'fr-fr': "Intellection",
			'es-es': "Agudeza",
			'it-it': "Acume",
			'pt-br': "Espertinho",
			'de-de': "Schärfe"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Because Galarian Slowpoke eat the seeds of a plant that grows only in Galar, their tails have developed a spicy flavor."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567134,
				tcgplayer: 241713
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567134,
				tcgplayer: 241713
			}
		},
	],
}

export default card

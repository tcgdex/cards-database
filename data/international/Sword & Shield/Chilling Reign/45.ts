import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [898],
	set: Set,

	name: {
		'en-us': "Ice Rider Calyrex V",
		'fr-fr': "Sylveroy Cavalier du Froid V",
		'es-es': "Calyrex Jinete Glacial V",
		'it-it': "Calyrex Cavaliere Glaciale V",
		'pt-br': "Calyrex Cavaleiro Glacial V",
		'de-de': "Schimmelreiter-Coronospa V"
	},

	illustrator: "D.A.G Inc.",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 40,
		cost: ["Water"]
	}, {
		name: {
			'en-us': "Glacial Lance",
			'fr-fr': "Lance de Glace",
			'es-es': "Lanza Glacial",
			'it-it': "Lancia Glaciale",
			'pt-br': "Lança Glacial",
			'de-de': "Blizzardlanze"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567125,
				tcgplayer: 241698
			}
		},
		{
			type: 'holo',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 672377
			}
		},
	],
}

export default card

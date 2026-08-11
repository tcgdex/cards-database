import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [898],
	set: Set,

	name: {
		'fr-fr': "Sylveroy Cavalier du Froid V",
		'en-us': "Ice Rider Calyrex V",
		'es-es': "Calyrex Jinete Glacial V",
		'it-it': "Calyrex Cavaliere Glaciale V",
		'pt-br': "Calyrex Cavaleiro Glacial V",
		'de-de': "Schimmelreiter-Coronospa V"
	},

	illustrator: "OKACHEKE",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Transpercement",
			'en-us': "Pierce",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 40,
		cost: ["Water"]
	}, {
		name: {
			'fr-fr': "Lance de Glace",
			'en-us': "Glacial Lance",
			'es-es': "Lanza Glacial",
			'it-it': "Lancia Glaciale",
			'pt-br': "Lança Glacial",
			'de-de': "Blizzardlanze"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'en-us': "Discard 2 Energy from this Pokémon.",
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
				cardmarket: 567272,
				tcgplayer: 241700
			}
		},
	],
}

export default card

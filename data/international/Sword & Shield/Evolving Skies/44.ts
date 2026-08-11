import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Bergmite",
		'fr-fr': "Grelaçon",
		'es-es': "Bergmite",
		'it-it': "Bergmite",
		'pt-br': "Bergmite",
		'de-de': "Arktip"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	illustrator: "kirisAki",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Tackle",
			'de-de': "Tackle"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Spinning Attack",
			'de-de': "Rundumangriff"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "This Pokémon lives in areas of frigid cold. It secures itself to the back of an Avalugg by freezing its feet in place."
	},

	dexId: [712],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574068,
				tcgplayer: 246868
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574068,
				tcgplayer: 246868
			}
		},
	],
}

export default card

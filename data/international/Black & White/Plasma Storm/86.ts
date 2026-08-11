import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'es-es': "Scrafty",
		'it-it': "Scrafty",
		'pt-br': "Scrafty",
		'de-de': "Irokex"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Kick Away",
				'fr-fr': "Coud'Pied Éjecteur",
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Reinforced Headbutt",
				'fr-fr': "Coup d’Boule Renforcé",
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, this attack does 50 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It pulls up its shed skin to protect itself while it kicks. The bigger the crest, the more respected it is.",
	},

	thirdParty: {
		cardmarket: 280826,
		tcgplayer: 88980
	}
}

export default card

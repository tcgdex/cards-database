import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'es-es': "Scrafty",
		'it-it': "Scrafty",
		'pt-br': "Scrafty",
		'de-de': "Irokex"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule"
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
				'en-us': "Crushing Blow",
				'fr-fr': "Coup Écrasant"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie au Pokémon Défenseur."
			},
			damage: 70,

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

	retreat: 2,

	description: {
		'en-us': "Groups of them beat up anything that enters their territory. Each can spit acidic liquid from its mouth.",
	},

	thirdParty: {
		cardmarket: 280396,
		tcgplayer: 88979
	}
}

export default card

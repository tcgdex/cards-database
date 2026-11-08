import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'es-es': "Beedrill",
		'it-it': "Beedrill",
		'pt-br': "Beedrill",
		'de-de': "Bibor"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Swift Sting",
				'fr-fr': "Piqûre Vive",
			},
			effect: {
				'en-us': "If this Pokémon has full HP, this attack does 40 more damage, and the Defending Pokémon is now Confused and Poisoned.",
				'fr-fr': "Si ce Pokémon a tous ses PV, cette attaque inflige 40 dégâts supplémentaires, et le Pokémon Défenseur est maintenant Confus et Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Its best attack involves flying around at high speed, striking with poison needles, then flying off.",
	},

	thirdParty: {
		cardmarket: 280881,
		tcgplayer: 83773
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'pt-br': "Gloom",
		'de-de': "Duflor"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Foul Odor",
				'fr-fr': "Odeur Fétide",
			},
			effect: {
				'en-us': "Both this Pokémon and the Defending Pokémon are now Confused.",
				'fr-fr': "Ce Pokémon et le Pokémon Défenseur sont maintenant Confus.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Powder",
				'fr-fr': "Poudre Toxik",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
	},

	thirdParty: {
		cardmarket: 280589,
		tcgplayer: 85787
	}
}

export default card

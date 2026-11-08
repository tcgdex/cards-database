import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Zangoose",
		'fr-fr': "Mangriff",
		'de-de': "Sengo"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [335],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Poison Resistance",
				'fr-fr': "Résistance au poison",
				'de-de': "Poison Resistance"
			},
			effect: {
				'en-us': "Zangoose can't be Poisoned.",
				'fr-fr': "Mangriff ne peut pas être Empoisonné.",
				'de-de': "Zangoose can't be Poisoned."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Target Slash",
				'fr-fr': "Tranche-cible",
				'de-de': "Target Slash"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Seviper, this attack does 10 damage plus 30 more damage.",
				'fr-fr': "Si Seviper est le Pokémon Défenseur, cette attaque inflige 40 dégâts.",
				'de-de': "If the Defending Pokémon is a Seviper, this attack does 10 damage plus 30 more damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Slash",
				'fr-fr': "Super entaille",
				'de-de': "Super Slash"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 60 dégâts.",
				'de-de': "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 30 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275791,
				tcgplayer: 90702
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275791,
				tcgplayer: 90702
			}
		},
	],

}

export default card

import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Wormadam Sandy Cloak",
		'fr-fr': "Wormadam Sandy Cloak"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [413],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti Cape Sable"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sandy Cloak",
				'fr-fr': "Cape sable"
			},
			effect: {
				'en-us': "Prevent all effects, excluding damage, done to Wormadam Sandy Cloak.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts exclus, infligés à Cheniselle Cape Sable par des Pokémon de votre adversaire."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Push Over",
				'fr-fr': "Facilité"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Fighting Energy attached to Wormadam Sandy Cloak.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Cheniselle Cape Sable."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	description: {
		'en-us': "When BURMY evolved, it cloak became a part of this Pokémon’s body. The cloak is never shed."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90643,
				cardmarket: 278042
			},
		},
	],

}

export default card

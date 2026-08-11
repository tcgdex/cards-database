import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Umbreon",
		'fr-fr': "Noctali",
		'de-de': "Nachtara"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pursuit",
				'fr-fr': "Poursuite",
				'de-de': "Pursuit"
			},
			effect: {
				'en-us': "During your opponent's next turn, if the Defending Pokémon tries to retreat, do 10 damage to it. (Don't apply Weakness and Resistance.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie de battre en retraite, infligez-lui 10 dégâts. (N'appliquez pas la Faiblesse et la Résistance.)",
				'de-de': "During your opponent's next turn, if the Defending Pokémon tries to retreat, do 10 damage to it. (Don't apply Weakness and Resistance.)"
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When agitated, this Pokémon protects itself by spraying poisonous sweat from its pores.",
		'fr-fr': "Quand il est énervé, ce Pokémon se protège avec une sueur empoisonnée émise par ses pores."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274524,
				tcgplayer: 90142
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274524,
				tcgplayer: 90142
			}
		}
	]
}

export default card


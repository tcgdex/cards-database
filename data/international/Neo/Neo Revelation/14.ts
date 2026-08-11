import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'de-de': "Suicune"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Crystal Body",
				'fr-fr': "Corps de cristal",
				'de-de': "Crystal Body"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent's attacks, other than damage, done to Suicune. This power stops working while Suicune is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Prévenez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à Suicune. Ce pouvoir cesse de fonctionner si Suicune est Endormi, Confus ou Paralysé.",
				'de-de': "Prevent all effects of your opponent's attacks, other than damage done to Suicune. This power stops working while Suicune is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Aurora Wave",
				'fr-fr': "Vague boréale",
				'de-de': "Aurora Wave"
			},
			effect: {
				'en-us': "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If only 1 is heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez 2 pièces. Si c'est face dans les deux cas, le Pokémon Défenseur est Paralysé. Si vous obtenez une face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If only 1 is heads, the Defending Pokémon is now Asleep."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Said to be the reincarnation of north winds, it can instantly purify filthy, murky water.",
		'fr-fr': "On dit de lui qu'il est la réincarnation des vents boréals. Il peut instantanément purifier l'eau sale et boueuse."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274600,
				tcgplayer: 89597
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274600,
				tcgplayer: 89597
			}
		}
	]
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
		de: "Suicune"
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
				en: "Crystal Body",
				fr: "Corps de cristal",
				de: "Crystal Body"
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, other than damage, done to Suicune. This power stops working while Suicune is Asleep, Confused, or Paralyzed.",
				fr: "Prévenez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à Suicune. Ce pouvoir cesse de fonctionner si Suicune est Endormi, Confus ou Paralysé.",
				de: "Prevent all effects of your opponent's attacks, other than damage done to Suicune. This power stops working while Suicune is Asleep, Confused, or Paralyzed."
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
				en: "Aurora Wave",
				fr: "Vague boréale",
				de: "Aurora Wave"
			},
			effect: {
				en: "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If only 1 is heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez 2 pièces. Si c'est face dans les deux cas, le Pokémon Défenseur est Paralysé. Si vous obtenez une face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If only 1 is heads, the Defending Pokémon is now Asleep."
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

	description: {
		fr: "On dit de lui qu'il est la réincarnation des vents boréals. Il peut instantanément purifier l'eau sale et boueuse."
	},

	thirdParty: {
		cardmarket: 274600
	}
}

export default card

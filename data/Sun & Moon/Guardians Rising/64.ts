import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Daunting Pose",
				fr: "Attitude Patibulaire",
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by your opponent's attacks. Your opponent's attacks and Abilities can't put damage counters on your Benched Pokémon.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire. Les attaques et les talents de votre adversaire ne peuvent pas placer de marqueurs de dégâts sur vos Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Cross Chop",
				fr: "Coup-Croix",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card

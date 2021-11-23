import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc"
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		464,
	],
	hp: 170,
	types: [
		"Fighting",
	],

	stage: "LEVEL-UP",


	attacks: [
		{

			name: {
				en: "Hard Crush",
				fr: "Écras'dur"
			},
			effect: {
				en: "Discard the top 5 cards of your deck. This attack does 50 damage for each Energy card you discarded.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts par chaque carte Énergie défaussée."
			},
			damage: "50×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Upthrow",
				fr: "Soulèvement"
			},
			effect: {
				en: "Search your discard pile for all Fighting Energy cards, show them to your opponent, and shuffle them into your deck.",
				fr: "Cherchez dans votre pile de défausse toutes les cartes Énergie Fighting, montrez-les à votre adversaire et mélangez-les à votre deck."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],




}

export default card

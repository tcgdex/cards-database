import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		es: "Plusle",
		it: "Plusle",
		pt: "Plusle",
		de: "Plusle"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [312],

	dexId: [
		311,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tag Draw",
				fr: "Pioche Groupée",
				de: "Gefährtenzieher"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 4 cards. If Minun is on your Bench, draw 4 more cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 4 cartes. Si Négapi est sur votre Banc, piochez 4 cartes supplémentaires.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 4 Karten. Wenn sich Minun auf deiner Bank befindet, ziehe 4 weitere Karten."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Positive Ion",
				fr: "Cation",
				de: "Positives Ion"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It cheers on friends with pom-poms made of sparks. It drains power from telephone poles.",
		de: "Es feuert Freunde mit Pompons an, die aus Funken bestehen. Es holt sich Energie aus Telegrafenmasten."
	},

	thirdParty: {
		cardmarket: 280367,
		tcgplayer: 88173
	}
}

export default card

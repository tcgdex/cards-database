import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Lightning"
	],

	attacks: [{
		cost: [
			"Lightning",
		],
		name: {
			en: "Recharge",
			fr: "Recharger",
			de: "Auffüllen"
		},
		effect: {
			en: "Search your deck for a Lightning Energy card and attach it to Electrike. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck 1 carte Énergie  et attachez-la à Dynavolt. Ensuite, mélangez votre deck.",
			de: "Durchsuche dein Deck nach einer {L}-Energiekarte und lege sie an Frizelbliz an. Mische dein Deck danach."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-attaque",
			de: "Ruckzuckhieb"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
		},
		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277182,
				tcgplayer: 85136
			}
		},
	],

}

export default card

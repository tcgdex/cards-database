import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Vibrava",
		fr: "Vibraninf Niv. 36",
		de: "Vibrava"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Typhoon",
				fr: "Énergy typhon",
				de: "Energietaifun"
			},
			effect: {
				en: "Does 20 damage times the number of Energy cards in your opponent's discard pile. Then, put those Energy cards on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie dans la pile de défausse de votre adversaire. Ensuite, placez ces cartes Énergie au dessus du deck de votre adversaire. Celui-ci mélange ensuite son deck.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl Energiekarten im Ablagestapel deines Gegners zu. Lege danach alle diese Energiekarten auf das Deck deines Gegners. Dein Gegner mischt sein Deck danach."
			},
			damage: "20x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278627,
		tcgplayer: 90338
	}
}

export default card

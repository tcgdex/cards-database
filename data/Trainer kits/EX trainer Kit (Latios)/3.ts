import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [264],
	set: Set,

	name: {
		en: "Linoone",
		fr: "Linéon",
		de: "Geradaks"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Zigzagoon",
		fr: "Zigzaton",
		de: "Zigzachs"
	},

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Seek Out",
			fr: "À la recherche",
			de: "Spürnase"
		},
		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
			fr: "Choisissez deux cartes dans votre deck. Montrez-les à votre adversaire et placez-les dans votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 2 beliebigen Karten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Continuous Headbutt",
			fr: "Coup d'boule sans fin",
			de: "Anhaltender Kopstoß"
		},
		effect: {
			en: "Flip a coin until you get tails. This attack does 40 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 40 dégâts multipliés par le nombre de face.",
			de: "Wirf solange eine Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Für jedesmal, wo die Münze „Kopf“ gezeigt hat, fügt dieser Angriff 40 Schadenspunkte zu."
		},
		damage: "40×"
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
				cardmarket: 275759,
				tcgplayer: 86805
			}
		},
	],

}

export default card

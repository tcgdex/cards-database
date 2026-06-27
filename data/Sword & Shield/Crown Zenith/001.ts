import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [43],
	set: Set,

	name: {
		en: "Oddish",
		fr: "Mystherbe",
		es: "Oddish",
		it: "Oddish",
		pt: "Oddish",
		de: "Myrapla"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Leaf Boomerang",
			fr: "Feuille-Boomerang",
			es: "Boomerang Hoja",
			it: "Fogliamerang",
			pt: "Folha Bumerangue",
			de: "Blätter-Bumerang"
		},

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691718,
				tcgplayer: 478033
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691718,
				tcgplayer: 478033
			}
		},
	],
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Pikipek",
		fr: "Picassaut",
		es: "Pikipek",
		'es-mx': "Pikipek",
		de: "Peppeck",
		it: "Pikipek",
		pt: "Pikipek"
	},

	illustrator: "Koji Nakata",
	rarity: "Common",
	category: "Pokemon",
	dexId: [731],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Stab",
			fr: "Entaille Double",
			es: "Doble Puñalada",
			'es-mx': "Doble Cuchillada",
			de: "Doppelstich",
			it: "Doppia Pugnalata",
			pt: "Facada Dupla"
		},

		cost: ["Colorless"],

		damage: "10×",

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895850,
				tcgplayer: 704823
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895850,
				tcgplayer: 704823
			}
		},
	],
}

export default card

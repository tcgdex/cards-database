import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal",
		fr: "Melmetal",
		es: "Melmetal",
		it: "Melmetal",
		pt: "Melmetal",
		de: "Melmetal"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 60
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Swinging Smash",
			fr: "Frappe Déchaînée",
			es: "Golpe Oscilante",
			it: "Oscillacolpo",
			pt: "Pancada Giratória",
			de: "Schmetterschwung"
		},

		effect: {
			en: "Flip 2 coins. This attack does 90 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño más por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 90 danni in più ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 90 pontos de dano a mais para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "30+"
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664587,
		tcgplayer: 277016
	}
}

export default card

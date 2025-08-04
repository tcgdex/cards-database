import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja V",
		fr: "Amphinobi V",
		es: "Greninja V",
		it: "Greninja V",
		pt: "Greninja V",
		de: "Quajutsu V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Water Drip",
			fr: "Goutte à Goutte",
			de: "Spritzwasser",
			es: "Goteo de Agua",
			pt: "Gotejo",
			it: "Gocciolacqua"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Dancing Shuriken",
			fr: "Shuriken Dansant",
			de: "Tanzende Shuriken",
			es: "Shuriken Danzante",
			pt: "Estrela Ninja Dançante",
			it: "Lame Danzanti"
		},

		damage: "80×",

		effect: {
			en: "Flip 3 coins. This attack does 80 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			es: "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			pt: "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582207,
		tcgplayer: 253223
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [208],
	set: Set,

	name: {
		en: "Steelix",
		fr: "Steelix",
		es: "Steelix",
		it: "Steelix",
		pt: "Steelix",
		de: "Stahlos"
	},

	illustrator: "NC Empire",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		de: "Onix"
	},

	attacks: [{
		name: {
			en: "Steel Swing",
			fr: "Frappe d'Acier",
			es: "Golpe de Acero",
			it: "Oscillacciaio",
			pt: "Balanço de Aço",
			de: "Stahlschwung"
		},

		effect: {
			en: "Flip 2 coins. This attack does 80 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 200,
		cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It is thought its body transformed as a result of iron accumulating internally from swallowing soil."
	},

	thirdParty: {
		cardmarket: 545576,
		tcgplayer: 234184
	}
}

export default card

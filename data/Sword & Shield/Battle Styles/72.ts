import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [472],
	set: Set,

	name: {
		en: "Gliscor",
		fr: "Scorvol",
		es: "Gliscor",
		it: "Gliscor",
		pt: "Gliscor",
		de: "Skorgro"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		it: "Gligar",
		pt: "Gligar",
		de: "Skorgla"
	},

	attacks: [{
		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
			es: "Acróbata",
			it: "Acrobazia",
			pt: "Acrobático",
			de: "Akrobatik"
		},

		effect: {
			en: "Flip 2 coins. This attack does 40 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 40 pontos de dano a mais para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Guillotine",
			fr: "Guillotine",
			es: "Guillotina",
			it: "Ghigliottina",
			pt: "Guilhotina",
			de: "Guillotine"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Its flight is soundless. It uses its lengthy tail to carry off its prey… Then its elongated fangs do the rest."
	},

	thirdParty: {
		cardmarket: 545476,
		tcgplayer: 234248
	}
}

export default card
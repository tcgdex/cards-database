import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [469],
	set: Set,

	name: {
		en: "Yanmega",
		fr: "Yanmega",
		es: "Yanmega",
		it: "Yanmega",
		pt: "Yanmega",
		de: "Yanmega"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
		es: "Yanma",
		it: "Yanma",
		pt: "Yanma",
		de: "Yanma"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			es: "Ala Cortante",
			it: "Ala Tagliente",
			pt: "Asa Cortante",
			de: "Rasierflügel"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wide Wing",
			fr: "Larges Ailes",
			es: "Ala Ancha",
			it: "Grande Ala",
			pt: "Asa Larga",
			de: "Breite Flügel"
		},

		effect: {
			en: "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
			fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tienes más cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			it: "Se hai più carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver mais cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du mehr Karten auf der Hand hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	retreat: 0,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658498
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [623],
	set: Set,

	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Big Hand",
			fr: "Grande Main",
			es: "Manaza",
			it: "Gran Mano",
			pt: "Mãozona",
			de: "Große Hand"
		},

		effect: {
			en: "This attack does 10 more damage for each card in your hand.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte dans votre main.",
			es: "Este ataque hace 10 puntos de daño más por cada carta en tu mano.",
			it: "Questo attacco infligge 10 danni in più per ogni carta nella tua mano.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada carta na sua mão.",
			de: "Diese Attacke fügt für jede Karte auf deiner Hand 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			pt: "Megassoco",
			de: "Megahieb"
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608533,
		tcgplayer: 263799
	}
}

export default card
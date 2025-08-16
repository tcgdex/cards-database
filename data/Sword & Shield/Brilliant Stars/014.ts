import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		en: "Shaymin VSTAR",
		fr: "Shaymin VSTAR",
		es: "Shaymin V-ASTRO",
		it: "Shaymin V ASTRO",
		pt: "Shaymin V-ASTRO",
		de: "Shaymin VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],

	evolveFrom: {
		en: "Shaymin V",
		fr: "Shaymin-V",
		es: "Shaymin V",
		it: "Shaymin-V",
		pt: "Shaymin V",
		de: "Shaymin-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Revenge Blast",
			fr: "Explo-Vengeance",
			es: "Estallido Venganza",
			it: "Vendicabomba",
			pt: "Raio de Vingança",
			de: "Rachestoß"
		},

		effect: {
			en: "This attack does 40 more damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Este ataque hace 40 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 40 danni in più per ogni carta Premio presa dal tuo avversario.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 40 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608448,
		tcgplayer: 263611
	}
}

export default card

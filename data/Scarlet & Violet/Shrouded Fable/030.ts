import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [359],
	set: Set,

	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Darkfall",
			fr: "Plongée Dans l'Obscurité",
			es: "Caída Oscura",
			it: "Caduta nell'Oscurità",
			pt: "Declínio",
			de: "Einfallende Finsternis"
		},

		effect: {
			en: "If you have at least 3 {D} Energy in play, this attack does 50 more damage.",
			fr: "Si vous avez au moins 3 Énergies {D} en jeu, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Si tienes por lo menos 3 Energías {D} en juego, este ataque hace 50 puntos de daño más.",
			it: "Se hai almeno tre Energie {D} in gioco, questo attacco infligge 50 danni in più.",
			pt: "Se você tiver pelo menos 3 Energias {D} em jogo, este ataque causará 50 pontos de dano a mais.",
			de: "Wenn du mindestens 3 {D}-Energien im Spiel hast, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "rika"
}

export default card

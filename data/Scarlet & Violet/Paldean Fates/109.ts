import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Blazing Destruction",
			fr: "Destruction Ardente",
			es: "Destrucción Abrasadora",
			it: "Raso al Fuoco",
			pt: "Destruição Flamejante"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			es: "Descarta 1 Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Descarte um Estádio em jogo."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Steady Firebreathing",
			fr: "Crachage de Feu Régulier",
			es: "Lanzallamas Continuo",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
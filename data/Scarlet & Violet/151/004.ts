import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Salamèche",
		en: "Charmander",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Destruction Ardente",
			en: "Blazing Destruction",
			es: "Destrucción Abrasadora",
			it: "Raso al Fuoco",
			pt: "Destruição Flamejante",
			de: "Feurige Verwüstung"
		},

		effect: {
			fr: "Défaussez un Stade en jeu.",
			en: "Discard a Stadium in play.",
			es: "Descarta 1 Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Descarte um Estádio em jogo.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			fr: "Crachage de Feu Régulier",
			en: "Steady Firebreathing",
			es: "Lanzallamas Continuo",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante",
			de: "Stetiger Feuerhauch"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
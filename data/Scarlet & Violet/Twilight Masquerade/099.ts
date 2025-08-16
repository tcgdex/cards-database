import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Hisuian Growlithe",
		fr: "Caninos de Hisui",
		es: "Growlithe de Hisui",
		it: "Growlithe di Hisui",
		pt: "Growlithe de Hisui",
		de: "Hisui-Fukano"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Blazing Destruction",
			fr: "Destruction Ardente",
			es: "Destrucción Abrasadora",
			it: "Raso al Fuoco",
			pt: "Destruição Flamejante",
			de: "Feurige Verwüstung"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			es: "Descarta 1 Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Descarte um Estádio em jogo.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Take Down",
			fr: "Bélier",
			es: "Derribo",
			it: "Riduttore",
			pt: "Desmantelar",
			de: "Bodycheck"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Whisker",

	thirdParty: {
		cardmarket: 769273
	}
}

export default card
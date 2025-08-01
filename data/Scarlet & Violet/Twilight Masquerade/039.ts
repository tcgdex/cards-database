import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Chi-Yu",
		fr: "Yuyu",
		es: "Chi-Yu",
		it: "Chi-Yu",
		pt: "Chi-Yu",
		de: "Yuyu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Allure",
			fr: "Allure",
			es: "Atractivo",
			it: "Affascinante",
			pt: "Fascinar",
			de: "Verlockung"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Ground Melter",
			fr: "Fonte du Terrain",
			es: "Fundición de Tierra",
			it: "Sciogliterra",
			pt: "Derretimento de Campo",
			de: "Bodenschmelzer"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 60 more damage. Then, discard that Stadium.",
			fr: "Si un Stade est en jeu, cette attaque inflige 60 dégâts supplémentaires. Ensuite, défaussez ce Stade.",
			es: "Si hay un Estadio en juego, este ataque hace 60 puntos de daño más. Después, descarta ese Estadio.",
			it: "Se c'è in gioco una carta Stadio, questo attacco infligge 60 danni in più. Poi scarta quella carta Stadio.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 60 pontos de dano a mais. Em seguida, descarte aquele Estádio.",
			de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
		},

		damage: "60+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Oku",

	thirdParty: {
		cardmarket: 769213
	}
}

export default card
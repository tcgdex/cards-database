import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
		es: "Sawsbuck",
		it: "Sawsbuck",
		pt: "Sawsbuck",
		de: "Kronjuwild"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim"
	},

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Winter Horn",
			fr: "Corne Hivernale",
			es: "Cornamenta Invernal",
			it: "Corna Invernali",
			pt: "Chifre Invernal",
			de: "Winterhorn"
		},

		effect: {
			en: "If you have a Stadium in play, this attack does 80 more damage.",
			fr: "Si vous avez un Stade en jeu, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tienes un Estadio en juego, este ataque hace 80 puntos de daño más.",
			it: "Se hai in gioco una carta Stadio, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver um Estádio em jogo, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card
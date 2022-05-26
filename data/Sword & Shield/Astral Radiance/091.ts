import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Overqwil"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Hisuian Qwilfish",
		fr: "Qwilfish de Hisui",
		es: "Qwilfish de Hisui",
		it: "Qwilfish di Hisui",
		pt: "Qwilfish de Hisui",
		de: "Hisui-Baldorfish"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Dirty Press",
			fr: "Vile Pression",
			es: "Sucia Presión",
			it: "Bruttapressa",
			pt: "Compressão Suja",
			de: "Niederträchtiger Druck"
		},

		effect: {
			en: "If you have at least 3 Darkness Energy in play, this attack does 90 more damage.",
			fr: "Si vous avez au moins 3 Énergies Darkness en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si tienes por lo menos 3 Energías Darkness en juego, este ataque hace 90 puntos de daño más.",
			it: "Se hai almeno tre Energie Darkness in gioco, questo attacco infligge 90 danni in più.",
			pt: "Se você tiver pelo menos 3 Energias Darkness em jogo, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du mindestens 3 Darkness-Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
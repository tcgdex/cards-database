import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Nidoran♂",
		fr: "Nidoran♂ de la Team Rocket",
		de: "Team Rockets Nidoran♂",
		it: "Nidoran♂ del Team Rocket",
		es: "Nidoran♂ del Team Rocket",
		pt: "Nidoran♂ da Equipe Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			de: "Durchbohren",
			it: "Perforare",
			es: "Perforar",
			pt: "Perfurar"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			de: "Einhämmern",
			it: "Martello",
			es: "Martillear",
			pt: "Martelada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card
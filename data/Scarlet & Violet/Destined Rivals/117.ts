import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [32],
	set: Set,

	name: {
		en: "Team Rocket's Nidoran♂",
		fr: "Nidoran♂ de la Team Rocket",
		de: "Team Rockets Nidoran♂",
		it: "Nidoran♂ del Team Rocket",
		es: "Nidoran♂ del Team Rocket",
		pt: "Nidoran♂ da Equipe Rocket",
		'es-mx': "Nidoran♂ del Equipo Rocket"
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
			pt: "Perfurar",
			'es-mx': "Perforar"
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
			pt: "Martelada",
			'es-mx': "Martillar"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [56],
	set: Set,

	name: {
		fr: "Férosinge",
		en: "Mankey",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Balayage",
			en: "Low Kick",
			es: "Patada Baja",
			it: "Colpo Basso",
			pt: "Rasteira",
			de: "Fußkick"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Suspension",
			en: "Hang Down",
			es: "Prender",
			it: "Tirar Giù",
			pt: "Dependurar",
			de: "Herunterhängen"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "kurumitsu",

	description: {
		en: "It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.",
	},

	thirdParty: {
		cardmarket: 709537
	}
}

export default card
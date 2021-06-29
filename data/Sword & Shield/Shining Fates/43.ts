import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Mimigal",
		en: "Spinarak",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Suspension",
			en: "Hang Down",
			es: "Prender",
			it: "Tirar Giù",
			pt: "Dependurar",
			de: "Herunterhängen"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Dard",
			en: "Sting",
			es: "Aguijonazo",
			it: "Puntura",
			pt: "Ferroada",
			de: "Einstich"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
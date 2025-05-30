import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Flittle",
		fr: "Flotillon",
		de: "Flattutu",
		it: "Flittle",
		es: "Flittle",
		pt: "Flittle"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			de: "Rundumangriff",
			it: "Attacco Rotante",
			es: "Ataque Giratorio",
			pt: "Ataque Giratório"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Lickitung",
		fr: "Excelangue"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Tongue Slap",
			fr: "Gros Coup de Langue"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Hammer In",
			fr: "Enfoncement"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card
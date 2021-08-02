import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Sharpen",
			fr: "Affûtage",
			es: "Afilar",
			it: "Affilatore",
			pt: "Afiar",
			de: "Schärfer"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
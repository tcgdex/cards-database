import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [404],
	set: Set,

	name: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		it: "Shinx",
		pt: "Shinx",
		de: "Sheinux"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Tika Matsuno",

	description: {
		en: "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electric Claws",
			fr: "Griffes Électriques",
			de: "Elektrokrallen",
			es: "Garras Eléctricas",
			pt: "Garras Elétricas",
			it: "Artigli Elettrici"
		},

		damage: 50
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582484,
		tcgplayer: 253248
	}
}

export default card
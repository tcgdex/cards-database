import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [731],
	set: Set,

	name: {
		en: "Pikipek",
		fr: "Picassaut",
		es: "Pikipek",
		it: "Pikipek",
		pt: "Pikipek",
		de: "Peppeck"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 152836
	}
}

export default card
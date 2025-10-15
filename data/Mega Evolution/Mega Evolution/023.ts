import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Litleo",
		fr: "Hélionceau",
		de: "Leufeo",
		it: "Litleo",
		es: "Litleo",
		pt: "Litleo",
		'es-mx': "Litleo"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			de: "Flackern",
			it: "Fiammata",
			es: "Llama",
			pt: "Chama",
			'es-mx': "Llama"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654362
	}
}

export default card
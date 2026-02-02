import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Rolycoly",
		fr: "Charbi",
		es: "Rolycoly",
		'es-mx': "Rolycoly",
		de: "Klonkett",
		it: "Rolycoly",
		pt: "Rolycoly"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			'es-mx': "Bofetón Lodo",
			de: "Lehmschelle",
			it: "Fangosberla",
			pt: "Tapa de Lama"
		},

		damage: 20
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675930,
		cardmarket: 869729
	}
}

export default card
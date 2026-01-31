import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		'es-mx': "Skitty",
		de: "Eneco",
		it: "Skitty",
		pt: "Skitty"
	},

	illustrator: "Yoko Hishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Cat Kick",
			fr: "Coup d'Patte",
			es: "Patada Gato",
			'es-mx': "Patada Gatuna",
			de: "Katzenkick",
			it: "Calciogatto",
			pt: "Chute do Gato"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675977,
		cardmarket: 869776
	}
}

export default card
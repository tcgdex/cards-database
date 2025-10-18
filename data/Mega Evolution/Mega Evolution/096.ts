import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatink",
		fr: "Forgerette",
		de: "Forgita",
		it: "Tinkatink",
		es: "Tinkatink",
		pt: "Tinkatink",
		'es-mx': "Tinkatink"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	dexId: [957],

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Beat",
			fr: "Bataille",
			de: "Verprügler",
			it: "Battuta",
			es: "Toque",
			pt: "Pulso",
			'es-mx': "Golpeteo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654435
	}
}

export default card
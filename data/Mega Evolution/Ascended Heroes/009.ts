import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Bayleef",
		fr: "Macronium",
		es: "Bayleef",
		'es-mx': "Bayleef",
		de: "Lorblatt",
		it: "Bayleef",
		pt: "Bayleef"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			es: "Paso Hoja",
			'es-mx': "Paso de Hoja",
			de: "Blattschritt",
			it: "Passofoglia",
			pt: "Passo de Folha"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "friendball"
		}
	],

	thirdParty: {
		tcgplayer: 675821,
		cardmarket: 869620
	}
}

export default card

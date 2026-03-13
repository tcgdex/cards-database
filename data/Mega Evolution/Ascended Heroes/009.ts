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
			type: "normal",
			thirdParty: {
				cardmarket: 869620,
				tcgplayer: 675821
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 869620,
				tcgplayer: 675821
			}
		},
		{
			type: "reverse",
			foil: "friendball",
			thirdParty: {
				cardmarket: 870149,
				tcgplayer: 676859
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870150,
				tcgplayer: 676999
			}
		},
	],
}

export default card

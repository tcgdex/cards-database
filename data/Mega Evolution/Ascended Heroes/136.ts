import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "N's Zorua",
		fr: "Zorua de N",
		es: "Zorua de N",
		'es-mx': "Zorua de N",
		de: "Ns Zorua",
		it: "Zorua di N",
		pt: "Zorua do N"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			'es-mx': "Arañazo",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869747,
			tcgplayer: 675948
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869747,
			tcgplayer: 675948
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870351,
			tcgplayer: 676960
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870352,
			tcgplayer: 677100
		}
	},
],
}

export default card

import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",
	dexId: [5],

	evolveFrom: {
		en: "Charmander"
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Steady Firebreathing"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 694693
			}
		}
	]
}

export default card

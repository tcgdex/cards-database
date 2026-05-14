import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [597],
	set: Set,

	name: {
		en: "Ferroseed",
		fr: "Grindur",
		es: "Ferroseed",
		it: "Ferroseed",
		pt: "Ferroseed",
		de: "Kastadur"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Spike Sting",
			fr: "Pic Piquant",
			es: "Picotazo Púas",
			it: "Aculeopuntura",
			pt: "Ferroada de Espinhos",
			de: "Stachelstich"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740664,
				tcgplayer: 523804,
				cardtrader: 265243
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740664,
				tcgplayer: 523804,
				cardtrader: 265243
			}
		},
	],

	illustrator: "Miki Tanaka",

	
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [557],
	set: Set,

	name: {
		en: "Dwebble",
		fr: "Crabicoque",
		es: "Dwebble",
		it: "Dwebble",
		pt: "Dwebble",
		de: "Lithomith"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740482,
				tcgplayer: 523605,
				cardtrader: 265011
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740482,
				tcgplayer: 523605,
				cardtrader: 265011
			}
		},
	],

	illustrator: "Scav",

	
}

export default card

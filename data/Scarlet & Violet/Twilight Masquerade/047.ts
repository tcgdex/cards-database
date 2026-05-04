import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [341],
	set: Set,

	name: {
		en: "Corphish",
		fr: "Écrapince",
		es: "Corphish",
		it: "Corphish",
		pt: "Corphish",
		de: "Krebscorps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			es: "Agarre",
			it: "Presa",
			pt: "Agarramento Compressor",
			de: "Klammer"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769221,
				tcgplayer: 550091
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769221,
				tcgplayer: 550091
			}
		},
	],

	illustrator: "Kouki Saitou",

}

export default card
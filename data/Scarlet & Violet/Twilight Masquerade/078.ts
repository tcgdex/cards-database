import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [35],
	set: Set,

	name: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		it: "Clefairy",
		pt: "Clefairy",
		de: "Piepi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Moon Kick",
			fr: "Coup d'Pied Lunaire",
			es: "Patada Lunar",
			it: "Calcioluna",
			pt: "Chute Lunar",
			de: "Mondkick"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "On nights with a full moon, they gather together and dance. The surrounding area is enveloped in an abnormal magnetic field.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769252,
				tcgplayer: 550122
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769252,
				tcgplayer: 550122
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

}

export default card
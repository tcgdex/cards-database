import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [769],
	set: Set,

	name: {
		en: "Sandygast",
		fr: "Bacabouh",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Sand Spray",
			fr: "Jet Sableux",
			es: "Rociado de Arena",
			it: "Silicospruzzo",
			pt: "Spray de Areia",
			de: "Sandspray"
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794399,
				tcgplayer: 590038
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794399,
				tcgplayer: 590038
			}
		},
	],

	illustrator: "Koji Nakata",

}

export default card

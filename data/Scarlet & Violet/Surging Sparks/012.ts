import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [951],
	set: Set,

	name: {
		en: "Capsakid",
		fr: "Pimito",
		es: "Capsakid",
		it: "Capsakid",
		pt: "Capsakid",
		de: "Chilingel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			de: "Abrupter Kopfstoß"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794267,
				tcgplayer: 589886
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794267,
				tcgplayer: 589886
			}
		},
	],

	illustrator: "Julie Hang",
	
}

export default card

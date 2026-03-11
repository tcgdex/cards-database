import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [629],
	set: Set,

	name: {
		en: "Vullaby",
		fr: "Vostourno",
		de: "Skallyk",
		it: "Vullaby",
		pt: "Vullaby",
		es: "Vullaby",
		'es-mx': "Vullaby"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Playful Kick",
			fr: "Coup de Pied de Garnement",
			de: "Verspielter Kick",
			it: "Calcio Briccone",
			pt: "Chute Brincalhão",
			es: "Patada Juguetona",
			'es-mx': "Patada Juguetona"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836019,
				tcgplayer: 642512
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836019,
				tcgplayer: 642512
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836609,
				tcgplayer: 642754
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836610,
				tcgplayer: 642681
			}
		},
	],
}

export default card
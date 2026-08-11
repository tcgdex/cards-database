import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [827],
	set: Set,

	name: {
		en: "Nickit",
		fr: "Goupilou",
		es: "Nickit",
		it: "Nickit",
		pt: "Nickit",
		de: "Kleptifux"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658764,
				tcgplayer: 272304
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658764,
				tcgplayer: 272304
			}
		},
	],
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [551],
	set: Set,

	name: {
		en: "Sandile",
		fr: "Mascaïman",
		es: "Sandile",
		it: "Sandile",
		pt: "Sandile",
		de: "Ganovil"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		en: "The desert gets cold at night, so when the sun sets, this Pokémon burrows deep into the sand and sleeps until sunrise.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682158,
				tcgplayer: 451765
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682158,
				tcgplayer: 451765
			}
		},
	],
}

export default card

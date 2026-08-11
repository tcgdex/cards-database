import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [779],
	set: Set,

	name: {
		en: "Bruxish",
		fr: "Denticrisse",
		es: "Bruxish",
		it: "Bruxish",
		pt: "Bruxish",
		de: "Knirfish"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			it: "Surf",
			pt: "Surfar",
			de: "Surfer"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		en: "Its skin is thick enough to fend off Mareanie's spikes. With its robust teeth, Bruxish crunches up the spikes and eats them."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545326,
				tcgplayer: 234189
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545326,
				tcgplayer: 234189
			}
		},
	],
}

export default card

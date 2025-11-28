import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Shin Nagasawa",
	category: "Pokemon",


	dexId: [27],
	description: {
		en: "An ancient tradition of Alolan festivals, still carried on to this day, is a competition to slide Sandshrew across ice as far as one can."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fury Swipes"
		},

		damage: "10×",

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Alolan Sandshrew"
	},

	rarity: "None",
	hp: 60,
	types: ["Water"],

	thirdParty: {
		tcgplayer: 200964
	}
}

export default card
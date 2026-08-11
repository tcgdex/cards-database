import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [714],
	set: Set,

	name: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'de-de': "Gleiten"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "After nightfall, they emerge from the caves they nest in during the day. Using their ultrasonic waves, they go on the hunt for ripened fruit.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682179,
				tcgplayer: 451785
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682179,
				tcgplayer: 451785
			}
		},
	],
}

export default card

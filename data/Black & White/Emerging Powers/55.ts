import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		529,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud'Boue",
				de: "Lehmschelle"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It makes its way swiftly through the soil by putting both claws together and rotating at high speed.",
		de: "Es führt seine beiden Klauen zusammen, dreht sich rapide um die eigene Achse und gräbt sich ratzfatz durch das Erdreich."
	},

	thirdParty: {
		cardmarket: 280019,
		tcgplayer: 84965
	}
}

export default card

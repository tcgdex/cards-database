import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Boost Energy",
		fr: "Énergie super",
		de: "Boost Energy*"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached.\nBoost Energy provides  Energy. The Pokémon Boost Energy is attached to can't retreat.\nWhen the Pokémon Boost Energy is attached to is no longer an Evolved Pokémon, discard Boost Energy."
	},

	thirdParty: {
		cardmarket: 275221,
		tcgplayer: 83937
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		}
	]
}

export default card

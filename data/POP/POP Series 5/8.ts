import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Boost Energy",
		fr: "Énergie Super",
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached. Boost Energy provides ColorlessColorlessColorless Energy. The Pokémon Boost Energy is attached to can’t retreat. If the Pokémon Boost Energy is attached to isn’t an Evolved Pokémon, discard Boost Energy."
	},

	energyType: "Special",

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277490,
		tcgplayer: 83941
	}
}

export default card

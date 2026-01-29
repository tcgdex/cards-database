import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Boost Energy",
		fr: "Boost Energy"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached. Boost Energy provides ColorlessColorlessColorless Energy. The Pokémon Boost Energy is attached to can’t retreat. If the Pokémon Boost Energy is attached to isn’t an Evolved Pokémon, discard Boost Energy.",
		fr: "Énergie super ne peut être attachée qu'à un Pokémon Évolué. Défaussez-la à la fin du tour au cours duquel elle a été attachée. Énergie super fournit une Énergie . Le Pokémon auquel Énergie super est attachée ne peut pas battre en retraite. Si le Pokémon auquel Énergie super est attachée n'est pas un Pokémon Évolué, défaussez-la."
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

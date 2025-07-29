import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metall Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Damage done to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon metal Energy is attached to isn´t , whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance). Metal Energy provides  Energy. (Doesn´t count as a basic Energy card.)"
	},

	thirdParty: {
		cardmarket: 275219
	}
}

export default card

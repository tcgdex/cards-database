import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Drowzee",
		fr: "Soporifik",
		de: "Traumato",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		'es-mx': "Drowzee"
	},

	illustrator: "Hachinana",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras'Face",
			de: "Klaps",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			'es-mx': "Destructor"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 728023,
		cardmarket: 918863
	}
}

export default card
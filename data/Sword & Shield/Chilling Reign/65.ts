import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras’Face",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			de: "Klaps"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Punch",
			fr: "Koud’Poing",
			es: "Puño",
			it: "Pugno",
			pt: "Soco",
			de: "Boxhieb"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card
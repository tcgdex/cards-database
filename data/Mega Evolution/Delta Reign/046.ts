import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Golett",
		fr: "Gringolem",
		de: "Golbit",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		'es-mx': "Golett"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			de: "Leichter Hieb",
			es: "Puño Ligero",
			it: "Pugnetto",
			pt: "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 50,
		cost: ["Psychic", "Psychic"]
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

	thirdParty: {
		tcgplayer: 728024,
		cardmarket: 918867
	}
}

export default card
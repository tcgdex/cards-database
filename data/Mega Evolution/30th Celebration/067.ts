import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "The oil-filled tail functions as a buoy, so it's fine even in rivers with strong currents."
	},

	name: {
		en: "Marill",
		fr: "Marill",
		de: "Marill",
		es: "Marill",
		it: "Marill",
		'es-mx': "Marill",
		pt: "Marill"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [183],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			es: "Placaje",
			it: "Azione",
			'es-mx': "Tacleada",
			pt: "Investida"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907674,
				tcgplayer: 716466
			}
		}
	],
}

export default card

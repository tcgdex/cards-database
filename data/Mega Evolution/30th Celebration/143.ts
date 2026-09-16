import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
		de: "Grandiras",
		es: "Kommo-o",
		it: "Kommo-o",
		'es-mx': "Kommo-o"
	},

	illustrator: "Gemi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Blazing Uppercut",
			fr: "Uppercut Flamboyant",
			de: "Lodernder Kinnhaken",
			es: "Gancho Abrasador",
			it: "Montante Divampante",
			'es-mx': "Uppercut Implacable"
		},

		damage: 250,
		cost: ["Lightning", "Fighting", "Colorless"]
	}],

	retreat: 2
}

export default card
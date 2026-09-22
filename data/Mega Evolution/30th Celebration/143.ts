import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It bashes its scales to test its opponents' mettle. The sound of struck Kommo-o scales frightens weaker foes and sends them running."
	},

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
	dexId: [784],
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

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 908352
			}
		}
	],
}

export default card

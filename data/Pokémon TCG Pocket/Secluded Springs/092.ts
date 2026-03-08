import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Monferno",
		fr: "Chimpenfeu"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [391],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Chimchar"
	},

	description: {
		en: "It skillfully controls the intensity of the fire on its\ntail to keep its foes at an ideal distance.",
		fr: "Il contrôle habilement l'intensité de la flamme de sa queue pour maintenir une distance idéale entre lui et ses adversaires lors des combats."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fiery Punch",
			fr: "Poing de Feu"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card
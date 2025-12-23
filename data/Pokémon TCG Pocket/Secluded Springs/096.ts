import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Kingler",
		fr: "Krabboss"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [99],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Krabby"
	},

	description: {
		en: "Its large and hard pincer has 10,000-horsepower\nstrength. However, being so big, it is unwieldy\nto move.",
		fr: "Sa grosse pince est dotée d'une puissance incommensurable. Sa taille imposante la rend toutefois difficile à utiliser."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "KO Crab",
			fr: "Crabe Fatal"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 80 more damage.",
			fr: "Lancez 2 pièces. Si toutes sont côté face, cette attaque inflige 80 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card
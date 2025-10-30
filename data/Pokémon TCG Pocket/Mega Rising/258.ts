import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Ampharos ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	evolveFrom: {
		en: "Flaaffy"
	},

	description: {
		en: "The tail's tip shines brightly and can be seen from\nfar away. It acts as a beacon for lost people."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Lightning Lancer"
		},

		damage: 100,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			en: "1 of your opponent's Benched Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, also do 20 damage to it."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
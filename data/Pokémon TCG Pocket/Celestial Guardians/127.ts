import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Kommo-o"
	},

	illustrator: "hatachu",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],

	evolveFrom: {
		en: "Hakamo-o"
	},

	description: {
		en: "It clatters its tail scales to unnerve opponents. This Pokémon will battle only those who stand steadfast in the face of this display."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Clanging Scales"
		},

		damage: 130,
		cost: ["Lightning", "Fighting"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes +30 damage from attacks."
		}
	}],

	retreat: 2
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Shiinotic"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Morelull"
	},

	description: {
		en: "Its flickering spores lure in prey and put them to<br />sleep. Once this Pokémon has its prey snoozing,<br />it drains their vitality with its fingertips."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Illuminate"
		},

		effect: {
			en: "Once during your turn, you may put a random Pokémon from your deck into your hand."
		}
	}],

	attacks: [{
		name: {
			en: "Gentle Slap"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card
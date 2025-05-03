import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Golbat"
	},

	description: {
		en: "Both of its legs have turned into wings. Without a sound, Crobat flies swiftly toward its prey and sinks its fangs into the nape of its target's neck."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cunning Link"
		},

		effect: {
			en: "Once during your turn, if you have Arceus or Arceus ex in play, you may do 30 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Darkness Fang"
		},

		damage: 50,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card

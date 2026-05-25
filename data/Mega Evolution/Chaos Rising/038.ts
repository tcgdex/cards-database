import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Phantump"
	},

	illustrator: "Taiga Kasai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [708],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Spiteful Evolution"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Choose a card from your hand that evolves from this Pokémon and put it onto this Pokémon to evolve it. If you evolved this Pokémon in this way, place 2 damage counters on this Pokémon. (You can't use this Ability during your first turn.)"
		}
	}],

	attacks: [{
		name: {
			en: "Mumble"
		},

		cost: ["Psychic"],
		damage: 10
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693531
			}
		}
	],
}

export default card
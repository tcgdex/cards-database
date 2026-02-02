import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [3],
	set: Set,

	name: {
		en: "Venusaur",
		fr: "Lunala"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Solarbeam",
			fr: "Douleur Lunaire"
		},

		damage: 60,
		cost: ["Grass", "Grass", "Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: ""
	}],

	retreat: 2,

	description: {
		en: "This plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
	},

	abilities: [{
		type: "Pokemon Power",

		name: {
			en: "Energy Trans"
		},

		effect: {
			en: "As often as you like during your turn (before your attack), you may take 1 Grass Energy card attached to 1 of your Pokémon and attach it to a different one. This power can't be used if Venusaur is Asleep, Confused, or Paralyzed."
		}
	}],

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576773
	}
}

export default card

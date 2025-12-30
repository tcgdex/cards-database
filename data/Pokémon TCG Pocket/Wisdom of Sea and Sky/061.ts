import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Crawdaunt",
		fr: "Colhomard"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [342],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Corphish"
	},

	description: {
		en: "A rough customer that wildly flails its giant claws.\nIt is said to be extremely hard to raise.",
		fr: "Ce Pokémon agite violemment ses énormes pinces. Il faut beaucoup de patience pour le dresser."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Unruly Claw",
			fr: "Pince Rebelle"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard a random Energy from your opponent's Active Pokémon.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez défausser au hasard une Énergie attachée au Pokémon Actif de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card
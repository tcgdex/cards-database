import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Ambipom",
		fr: "Capidextre"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Aipom"
	},

	description: {
		en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you.",
		fr: "Il utilise toujours ses deux queues pour faire la moindre tâche. Il s'en sert aussi pour enlacer les gens qu'il affectionne tout particulièrement."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Catching Tail",
			fr: "Queue Farfouilleuse"
		},

		effect: {
			en: "Once during your turn, you may put a random Pokémon Tool card from your deck into your hand.",
			fr: "Une fois pendant votre tour, vous pouvez ajouter au hasard une carte Outil Pokémon de votre deck à votre main."
		}
	}],

	attacks: [{
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
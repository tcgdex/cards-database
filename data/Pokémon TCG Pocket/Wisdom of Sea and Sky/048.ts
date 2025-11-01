import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Feraligatr",
		fr: "Aligatueur"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Croconaw"
	},

	description: {
		en: "It usually moves slowly, but it goes at blinding\nspeed when it attacks and bites prey.",
		fr: "Ce Pokémon à l'air pataud est capable d'attaquer à la vitesse de l'éclair pour mordre sa proie."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Destructive Whirlpool",
			fr: "Siphon Destructeur"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Discard a random Energy from your opponent's Active Pokémon.",
			fr: "Défaussez au hasard une Énergie du Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card
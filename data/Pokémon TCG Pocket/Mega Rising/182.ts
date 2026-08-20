import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot",
		fr: "Roucarnage"
	},

	illustrator: "Akira Komayama",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [18],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups"
	},

	description: {
		en: "It spreads its gorgeous wings widely to intimidate\nenemies. It races through the skies at\nMach-2 speed."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Twister",
			fr: "Ouragan"
		},

		damage: 80,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. For each heads, discard a random Energy from your opponent's Active Pokémon. If both of them are tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire. Si toutes sont côté pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card
import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Motisma"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Moti-Choix"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck jusqu’à 2 cartes Objet dont le nom contient le mot « Moti », montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Éclair"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card
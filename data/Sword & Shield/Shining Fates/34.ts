import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Motisma",
		en: "Rotom"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Moti-Choix",
			en: "Roto Choice"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck jusqu’à 2 cartes Objet dont le nom contient le mot « Moti », montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 2 Item cards that have the word \"Rotom\" in their name, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Éclair",
			en: "Thunder Shock"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed."
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
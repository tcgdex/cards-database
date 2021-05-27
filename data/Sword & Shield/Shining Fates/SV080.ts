import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Ixon de Galar",
		en: "Galarian Obstagoon"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Linéon de Galar",
		en: "Galarian Linoone"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cri Sauvage",
			en: "Untamed Shout"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 3 damage counters on 1 of your opponent’s Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Blocage",
			en: "Obstruct"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon."
		},

		damage: 90,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card
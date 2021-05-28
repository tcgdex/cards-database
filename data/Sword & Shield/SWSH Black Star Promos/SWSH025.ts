import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Garbodor",
		fr: "Miasmax"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Poisonous Puddle",
			fr: "Flaque Toxique"
		},

		effect: {
			en: "Once during your turn, if a Stadium is in play, you may make your opponent’s Active Pokémon Poisoned.",
			fr: "Une fois pendant votre tour, si un Stade est en jeu, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné."
		}
	}],

	attacks: [{
		name: {
			en: "Sludge Bomb",
			fr: "Bombe Beurk"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card
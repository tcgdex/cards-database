import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Gormandize",
			fr: "Goinfrerie"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may draw cards until you have 7 cards in your hand. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez piocher des cartes jusqu’à en avoir 7 en main. Si vous utilisez ce talent, votre tour se termine."
		}
	}],

	attacks: [{
		name: {
			en: "Body Slam",
			fr: "Plaquage"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card
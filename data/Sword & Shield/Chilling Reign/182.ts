import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Leuphorie V",
		en: "Blissey V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Médic Nature",
			en: "Natural Cure"
		},

		effect: {
			fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, il guérit de tous les États Spéciaux.",
			en: "Whenever you attach an Energy card from your hand to this Pokémon, it recovers from all Special Conditions."
		}
	}],

	attacks: [{
		name: {
			fr: "Explosion Euphorique",
			en: "Blissful Blast"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon. Si vous avez infligé des dégâts avec cette attaque, vous pouvez attacher jusqu’à 3 cartes Énergie de votre pile de défausse à ce Pokémon.",
			en: "This attack does 30 more damage for each Energy attached to this Pokémon. If you did any damage with this attack, you may attach up to 3 Energy cards from your discard pile to this Pokémon."
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card
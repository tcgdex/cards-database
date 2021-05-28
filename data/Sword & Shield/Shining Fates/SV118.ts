import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Métamorph V",
		en: "Ditto V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Transformation-V",
			en: "V Transformation"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez choisir un Pokémon-V de base dans votre pile de défausse et l’échanger contre ce Pokémon. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.",
			en: "Once during your turn, you may choose a Basic Pokémon V from your discard pile and switch it with this Pokémon. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Collage",
			en: "Stick On"
		},

		effect: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			en: "Attach a basic Energy card from your discard pile to this Pokémon."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
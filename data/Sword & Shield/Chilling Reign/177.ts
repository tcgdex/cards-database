import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Sulfura de Galar V",
		en: "Galarian Moltres V"
	},

	illustrator: "Shibuzoh.",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Ailes Ténébraises",
			en: "Direflame Wings"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Darkness de votre pile de défausse à ce Pokémon. Vous ne pouvez utiliser qu’un talent Ailes Ténébraises par tour.",
			en: "Once during your turn, you may attach a Darkness Energy card from your discard pile to this Pokémon. You can’t use more than 1 Direflame Wings Ability each turn."
		}
	}],

	attacks: [{
		name: {
			fr: "Aura Ardente",
			en: "Aura Burn"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 190,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card
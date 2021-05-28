import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Victini V",
		fr: "Victini V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "V Bullet",
			fr: "Projectile-V"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is a Pokémon V, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 50 dégâts supplémentaires."
		},

		damage: "10+",
		cost: ["Fire"]
	}, {
		name: {
			en: "Flare Shot",
			fr: "Tir Flambant"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie de ce Pokémon."
		},

		damage: 120,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card
import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pachyradjah"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		fr: "Charibari"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Peau Stérilisante"
		},

		effect: {
			fr: "Ce Pokémon ne peut être affecté par aucun État Spécial."
		}
	}],

	attacks: [{
		name: {
			fr: "Écrasement Vengeur"
		},

		effect: {
			fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires."
		},

		damage: "120+",
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4
}

export default card
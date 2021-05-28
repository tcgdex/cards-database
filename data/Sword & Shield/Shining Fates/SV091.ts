import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pachyradjah",
		en: "Copperajah"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		fr: "Charibari",
		en: "Cufant"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Peau Stérilisante",
			en: "Antibacterial Skin"
		},

		effect: {
			fr: "Ce Pokémon ne peut être affecté par aucun État Spécial.",
			en: "This Pokémon can’t be affected by any Special Conditions."
		}
	}],

	attacks: [{
		name: {
			fr: "Écrasement Vengeur",
			en: "Vengeful Stomp"
		},

		effect: {
			fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 120 dégâts supplémentaires.",
			en: "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage."
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
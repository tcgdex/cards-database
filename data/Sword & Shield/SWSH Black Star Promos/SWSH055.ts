import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Hatterene V",
		fr: "Sorcilence V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Confounding Pulse",
			fr: "Onde Troublante"
		},

		effect: {
			en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus."
		},

		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			en: "Mental Crush",
			fr: "Écrasement Mental"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is Confused, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "90+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card
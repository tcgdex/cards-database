import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Salarsen VMAX",
		en: "Toxtricity VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Salarsen-V",
		en: "Toxtricity V"
	},

	attacks: [{
		name: {
			fr: "Émeute G-Max",
			en: "G-Max Riot"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 80 dégâts supplémentaires.",
			en: "If your opponent’s Active Pokémon is Poisoned, this attack does 80 more damage."
		},

		damage: "160+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card
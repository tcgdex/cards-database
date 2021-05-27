import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wimessir V",
		en: "Indeedee V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Veille",
			en: "Watch Over"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
			en: "Once during your turn, you may heal 20 damage from your Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Psyko",
			en: "Psychic"
		},

		effect: {
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 60 more damage for each Energy attached to your opponent’s Active Pokémon."
		},

		damage: "10+",
		cost: ["Psychic", "Colorless", "Colorless"]
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
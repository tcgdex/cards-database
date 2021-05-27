import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Brindibou",
		en: "Rowlet"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cirque Céleste",
			en: "Sky Circus"
		},

		effect: {
			fr: "Si vous avez joué Ornithologue de votre main pendant ce tour, ignorez toutes les Énergies dans les coûts d’attaques de ce Pokémon.",
			en: "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon’s attack costs."
		}
	}],

	attacks: [{
		name: {
			fr: "Éclat Volant",
			en: "Wind Shard"
		},

		effect: {
			fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack does 60 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
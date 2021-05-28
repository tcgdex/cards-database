import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lakmécygne",
		en: "Swanna"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Couaneton",
		en: "Ducklett"
	},

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
			fr: "Coupe Aile",
			en: "Feather Slice"
		},

		effect: {
			fr: "Vous pouvez défausser une carte de votre main. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
			en: "You may discard a card from your hand. If you do, this attack does 70 more damage."
		},

		damage: "70+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}]
}

export default card
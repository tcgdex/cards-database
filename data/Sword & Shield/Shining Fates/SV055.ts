import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Chapotus",
		en: "Hattrem"
	},

	illustrator: "Lee HyunJung",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Bibichut",
		en: "Hatenna"
	},

	attacks: [{
		name: {
			fr: "Plénitude",
			en: "Calm Mind"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			en: "Heal 30 damage from this Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Centrifugifle",
			en: "Brutal Swing"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 30 more damage."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card
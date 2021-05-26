import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Chapotus"
	},

	illustrator: "Lee HyunJung",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Bibichut"
	},

	attacks: [{
		name: {
			fr: "Plénitude"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Centrifugifle"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires."
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
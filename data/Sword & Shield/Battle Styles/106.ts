import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Doublade",
		fr: "Dimoclès"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale"
	},

	attacks: [{
		name: {
			en: "Cut Down",
			fr: "Retranchement"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire."
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card
import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Salarsen",
		en: "Toxtricity"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Toxizap",
		en: "Toxel"
	},

	attacks: [{
		name: {
			fr: "Tête Brûlée",
			en: "Risk Taker"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, défaussez les 5 cartes du dessus du deck de votre adversaire. Si c’est pile, défaussez les 5 cartes du dessus de votre deck.",
			en: "Flip a coin. If heads, discard the top 5 cards of your opponent’s deck. If tails, discard the top 5 cards of your deck."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Secousse Tonnerre",
			en: "Thunder Jolt"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card
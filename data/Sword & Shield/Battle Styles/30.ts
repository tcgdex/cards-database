import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Overheater",
			fr: "Surchauffeur"
		},

		effect: {
			en: "Whenever your opponent flips a coin for their Burned Pokémon during Pokémon Checkup, it doesn’t recover from that Special Condition even if the result is heads.",
			fr: "Chaque fois que votre adversaire lance une pièce pour son Pokémon Brûlé pendant le Contrôle Pokémon, celui-ci ne guérit pas de cet État Spécial même si le résultat est face."
		}
	}],

	attacks: [{
		name: {
			en: "Bursting Inferno",
			fr: "Enfer Explosif"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
		},

		damage: 130,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card
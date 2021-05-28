import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Darumarond de Galar",
		en: "Galarian Darumaka"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Poing Glace",
			en: "Ice Punch"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed."
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card
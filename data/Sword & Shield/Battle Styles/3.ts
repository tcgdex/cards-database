import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Victreebel",
		fr: "Empiflor"
	},

	illustrator: "Tika Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor"
	},

	attacks: [{
		name: {
			en: "Panic Vine",
			fr: "Liane en Panique"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused. During your opponent’s next turn, that Pokémon can’t retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite."
		},

		damage: 40,
		cost: ["Grass"]
	}, {
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card
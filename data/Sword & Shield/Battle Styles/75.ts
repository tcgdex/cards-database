import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Conkeldurr",
		fr: "Bétochef"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier"
	},

	attacks: [{
		name: {
			en: "Hammer Pressure",
			fr: "Pression Martelante"
		},

		effect: {
			en: "If the Defending Pokémon is an Evolution Pokémon, it can’t attack during your opponent’s next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon Évolutif, il ne peut pas attaquer pendant le prochain tour de votre adversaire."
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card
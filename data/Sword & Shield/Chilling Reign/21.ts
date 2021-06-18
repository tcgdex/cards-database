import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Blaziken VMAX",
		fr: "Braségali VMAX"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		en: "Blaziken V",
		fr: "Braségali-V"
	},

	attacks: [{
		name: {
			en: "Clutch",
			fr: "Serre"
		},

		effect: {
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		},

		damage: 60,
		cost: ["Fire"]
	}, {
		name: {
			en: "Max Blaze",
			fr: "Brasiomax"
		},

		effect: {
			en: "Choose up to 2 of your Benched Rapid Strike Pokémon and attach an Energy card from your discard pile to each of them.",
			fr: "Choisissez jusqu’à 2 de vos Pokémon Mille Poings de Banc, puis attachez une carte Énergie de votre pile de défausse à chacun d’eux."
		},

		damage: 130,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card
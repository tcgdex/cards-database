import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Carnivine",
		fr: "Vortente"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Big Bite",
			fr: "Grosse Morsure"
		},

		effect: {
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Triple Whip",
			fr: "Triple Fouet"
		},

		effect: {
			en: "Flip 3 coins. This attack does 60 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face."
		},

		damage: "60×",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card
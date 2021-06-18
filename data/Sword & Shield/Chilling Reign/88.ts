import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Passimian",
		fr: "Quartermac"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Throwing Coach",
			fr: "Entraînement au Lancer"
		},

		effect: {
			en: "Your Rapid Strike Pokémon’s attacks do 30 more damage to your opponent’s Benched Pokémon V and Benched Pokémon-GX (before applying Weakness and Resistance). You can’t apply more than 1 Throwing Coach Ability at a time.",
			fr: "Les attaques de vos Pokémon Mille Poings infligent 30 dégâts supplémentaires aux Pokémon-V de Banc et Pokémon-GX de Banc de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez utiliser qu’un talent Entraînement au Lancer à la fois."
		}
	}],

	attacks: [{
		name: {
			en: "Fling",
			fr: "Dégommage"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card
import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Abomasnow",
		fr: "Blizzaroi"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Toughness Boost",
			fr: "Boost d’Endurance"
		},

		effect: {
			en: "Your Single Strike Pokémon in play, except any Abomasnow, get +50 HP. You can’t apply more than 1 Toughness Boost Ability at a time.",
			fr: "Vos Pokémon Poing Final en jeu, à l’exception de Blizzaroi, reçoivent +50 PV. Vous ne pouvez utiliser qu’un talent Boost d’Endurance à la fois."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing"
		},

		damage: 90,
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
import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mew",
		es: "Mew",
	},

	illustrator: "Cona Nitanda",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [151],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Psychic",
			es: "Psíquico",
		},

		effect: {
			en: "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895621,
				tcgplayer: 713288
			}
		},
		{
			type: "holo",
			size: "jumbo",
		}
	],
}

export default card

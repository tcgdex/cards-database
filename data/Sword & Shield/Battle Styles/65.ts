import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Orbeetle",
		fr: "Astronelle"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dottler",
		fr: "Coléodôme"
	},

	attacks: [{
		name: {
			en: "Evomancy",
			fr: "Évomancie"
		},

		effect: {
			en: "For each Energy attached to this Pokémon, search your deck for a Stage 2 Pokémon, except Orbeetle, and put it onto your Bench. Then, shuffle your deck.",
			fr: "Pour chaque Énergie attachée à ce Pokémon, cherchez dans votre deck un Pokémon de Niveau 2, à l’exception d’Astronelle, puis placez-le sur votre Banc. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud’Boul"
		},

		damage: 120,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card
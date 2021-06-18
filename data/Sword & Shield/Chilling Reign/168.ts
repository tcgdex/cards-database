import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Galopa de Galar V",
		en: "Galarian Rapidash V"
	},

	illustrator: "sui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Corne Balance",
			en: "Libra Horn"
		},

		effect: {
			fr: "Placez des marqueurs de dégâts sur l’un des Pokémon de votre adversaire jusqu’à ce qu’il ne lui reste que 100 PV.",
			en: "Put damage counters on 1 of your opponent’s Pokémon until its remaining HP is 100."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Psyko",
			en: "Psychic"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon."
		},

		damage: "60+",
		cost: ["Psychic", "Psychic"]
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
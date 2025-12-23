import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Smoochum",
		fr: "Lippouti"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [238],
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "If its face gets even slightly dirty, Smoochum will\nbathe immediately. But if its body gets dirty,\nSmoochum doesn't really seem to care.",
		fr: "Quand il s'aperçoit que son visage est sale, il le lave à l'eau, mais la propreté du reste de son corps ne semble pas le préoccuper."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shivery Wave",
			fr: "Onde qui Affole"
		},

		damage: 20,

		effect: {
			en: "This attack does 20 damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["ho-oh"]
}

export default card
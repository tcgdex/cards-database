import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Umbreon ex",
		'fr-fr': "Noctali-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [197],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dark Chase",
			'fr-fr': "Poursuite des Ténèbres"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may switch in 1 of your opponent's Benched Pokémon that has damage on it to the Active Spot.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez envoyer un des Pokémon de Banc de votre adversaire ayant subi des dégâts sur le Poste Actif."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur"
		},

		damage: 80,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card
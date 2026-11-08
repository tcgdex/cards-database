import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Leafeon ex",
		'fr-fr': "Phyllali-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [470],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Forest Breath",
			'fr-fr': "Souffle Forestier"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may take a {G} Energy from your Energy Zone and attach it to 1 of your {G} Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez prendre une Énergie {G} de votre zone Énergie et l’attacher à l’un de vos Pokémon {G}."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card
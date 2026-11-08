import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [82],
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Magnemite"
	},

	description: {
		'en-us': "Three Magnemite are linked by a strong magnetic\nforce. Earaches will occur if you get too close.",
		'fr-fr': "Le lien magnétique qui rattache ces trois Magnéti est si puissant qu'il fait mal aux oreilles si on s'en approche trop."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Volt Charge",
			'fr-fr': "Charge Volt"
		},

		effect: {
			'en-us': "Once during your turn, you may take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez prendre une Énergie {L} de votre zone Énergie et l'attacher à ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Magneton",
		fr: "Magnéton"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Magnemite"
	},

	description: {
		en: "Three Magnemite are linked by a strong magnetic\nforce. Earaches will occur if you get too close.",
		fr: "Le lien magnétique qui rattache ces trois Magnéti est si puissant qu'il fait mal aux oreilles si on s'en approche trop."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Volt Charge",
			fr: "Charge Volt"
		},

		effect: {
			en: "Once during your turn, you may take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {L} de votre zone Énergie et l'attacher à ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante"
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
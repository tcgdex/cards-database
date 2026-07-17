import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Many Trainers give their Fomantis their own flowerpots so they can sunbathe in peace and quiet.",
		de: "Viele Trainer geben Imantis einen eigenen Blumentopf, damit es ungestört sonnenbaden kann."
	},

	name: {
		en: "Fomantis",
		fr: "Mimantis",
		es: "Fomantis",
		'es-mx': "Fomantis",
		de: "Imantis"
	},

	illustrator: "Jiro Sasuno",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [753],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Reckless Charge",
			de: "Waghalsiger Sturmangriff"
		},

		cost: ["Grass"],

		damage: 30,

		effect: {
			en: "This Pokémon also does 10 damage to itself",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895869,
				tcgplayer: 704842
			}
		},
	],
}

export default card

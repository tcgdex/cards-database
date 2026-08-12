import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Emolga",
		fr: "Emolga",
		es: "Emolga",
		it: "Emolga",
		pt: "Emolga",
		de: "Emolga"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		587,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrichain",
				fr: "Électrichaîne",
				de: "Stromkette"
			},
			effect: {
				en: "Does 20 more damage if you have any Lightning Pokémon on your Bench.",
				fr: "Inflige 20 dégâts supplémentaires si vous avez un Pokémon Lightning sur votre Banc.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte zu, wenn sich mindestens 1 {L}-Pokémon auf deiner Bank befindet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They live on treetops and glide using the inside of a cape-like membrane while discharging electricity.",
		de: "Lebt in den Wipfeln der Waldbäume. Während es durch die Lüfte gleitet, entlädt es Strom aus seinen Fluglappen."
	},

	thirdParty: {
		cardmarket: 280160,
		tcgplayer: 85189
	}
}

export default card

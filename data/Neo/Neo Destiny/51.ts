import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Slowbro",
		fr: "Flagadoss lumineux"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fish Out",
				fr: "À la pêche"
			},
			effect: {
				en: "Your opponent may choose up to 3 Baby Pokémon, Basic Pokémon, and/or Evolution cards from his or her discard pile and shuffle them into his or her deck. Either way, you may do the same.",
				fr: "Votre adversaire peut choisir jusqu'à 3 cartes Bébé Pokémon, Pokémon de base et/ou Évolution de sa pile de défausse et les mélanger à son deck. Quelle que soit sa décision, vous pouvez faire de même."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Slash About",
				fr: "Grosse trempette"
			},
			effect: {
				en: "If there are more Energy cards attached to the Defending Pokémon than to Light Slowbro, this attack does 20 damage plus 20 more damage. If not, this attack does 20 damage.",
				fr: "S'il y a plus d'Énergie attachées au Pokémon Défenseur qu'à Flagadoss lumineux, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. Sinon, cette attaque inflige 20 dégâts."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Si le Kokyias attaché à sa queue se défait, ce Pokémon redevient un Ramoloss normal."
	}
}

export default card

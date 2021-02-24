import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Pantomime",
				fr: "Pantomime",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may switch 1 of your face-down Prize cards with the top card of your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez échanger une de vos cartes Récompense (actuellement face cachée) avec la carte du dessus de votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Juggling",
				fr: "Jonglerie",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card

import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Wartortle",
		fr: "Carabaffe obscur",
		de: "Dunkles Schillok"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Doubleslap",
				fr: "Double gifle",
				de: "Doubleslap"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Mirror Shell",
				fr: "Carapace miroir",
				de: "Mirror Shell"
			},
			effect: {
				en: "If an attack does damage to Dark Wartortle during your opponent's next turn (even if Dark Wartortle is Knocked Out), Dark Wartortle attacks the Defending Pokémon for an equal amount of damage.",
				fr: "Si une attaque inflige des dégâts à Carabaffe obscur pendant le prochain tour de votre adversaire (même si Carabaffe obscur est K.O.), Carabaffe obscur attaque le Pokémon Défenseur avec une quantité de dégâts égale.",
				de: "If an attack does damage to Dark Wartortle during your opponent's next turn (even if Dark Wartortle is Knocked Out). Dark Wartortle does an equal amount of damage to the Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il a très mauvais caractère et se cache dans sa carapace dès qu'il est de mauvaise humeur - ce qui est souvent le cas."
	},

	thirdParty: {
		cardmarket: 274099,
		tcgplayer: 84670
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

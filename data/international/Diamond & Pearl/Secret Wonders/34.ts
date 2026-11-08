import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Nidoking",
		'fr-fr': "Nidoking",
		'de-de': "Nidoking"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Rub",
				'fr-fr': "Friction empoisonnée",
				'de-de': "Rubbelgift"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Before doing damage, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Avant d'infliger des dégâts, vous pouvez échanger 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet. Bevor der Schaden zugefügt wird, kannst du 1 Verteidigendes Pokémon gegen ein Pokémon auf der Bank deines Gegners austauschen. Das neue Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pride Attack",
				'fr-fr': "Attaque de fierté",
				'de-de': "Rudelangriff"
			},
			effect: {
				'en-us': "Flip a coin for each Nidoqueen on your Bench. This attack does 60 damage plus 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Nidoqueen sur votre Banc. Cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf für jedes Nidoqueen auf deiner Bank 1 Münze. Dieser Angriff fügt 60 Schadenspunkte plus 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
	},

	thirdParty: {
		cardmarket: 277787,
		tcgplayer: 87697
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card

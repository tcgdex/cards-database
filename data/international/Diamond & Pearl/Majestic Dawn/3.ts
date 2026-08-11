import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Darkrai",
		'fr-fr': "Darkrai",
		'de-de': "Darkrai"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Darkness Shade",
				'fr-fr': "Ombre obscurité",
				'de-de': "Finsterschatten"
			},
			effect: {
				'en-us': "Once during your turn, when you put Darkrai from your hand onto your Bench, you may choose 1 of the Defending Pokémon. That Pokémon is now Asleep.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Darkrai de votre main sur votre Banc, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Endormi.",
				'de-de': "Einmal während deines Zuges kannst du, wenn du Darkrai von deiner Hand auf deine Bank legst, 1 Verteidigendes Pokémon wählen. Das gewählte Pokémon schläft jetzt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Dark Slumber",
				'fr-fr': "Sommeil obscur",
				'de-de': "Dunkler Schlummer"
			},
			effect: {
				'en-us': "At the end of your opponent's next turn, the Defending Pokémon is now Asleep.",
				'fr-fr': "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Am Ende des nächsten Zuges deines Gegners schläft das Verteidigende Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Resolve",
				'fr-fr': "Solution obscure",
				'de-de': "Finstere Entschlossenheit"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Asleep, remove 4 damage counters from Darkrai.",
				'fr-fr': "Si le Pokémon Défenseur est Endormi, retirez à Darkrai 4 marqueurs de dégât.",
				'de-de': "Wenn das Verteidigende Pokémon schläft, entferne 4 Schadensmarken von Darkrai."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
	},

	thirdParty: {
		cardmarket: 278052,
		tcgplayer: 84700
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card

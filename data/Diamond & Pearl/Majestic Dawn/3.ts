import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai",
		de: "Darkrai"
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
				en: "Darkness Shade",
				fr: "Ombre obscurité",
				de: "Finsterschatten"
			},
			effect: {
				en: "Once during your turn, when you put Darkrai from your hand onto your Bench, you may choose 1 of the Defending Pokémon. That Pokémon is now Asleep.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Darkrai de votre main sur votre Banc, vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Endormi.",
				de: "Einmal während deines Zuges kannst du, wenn du Darkrai von deiner Hand auf deine Bank legst, 1 Verteidigendes Pokémon wählen. Das gewählte Pokémon schläft jetzt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Dark Slumber",
				fr: "Sommeil obscur",
				de: "Dunkler Schlummer"
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Asleep.",
				fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est maintenant Endormi.",
				de: "Am Ende des nächsten Zuges deines Gegners schläft das Verteidigende Pokémon."
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
				en: "Dark Resolve",
				fr: "Solution obscure",
				de: "Finstere Entschlossenheit"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, remove 4 damage counters from Darkrai.",
				fr: "Si le Pokémon Défenseur est Endormi, retirez à Darkrai 4 marqueurs de dégât.",
				de: "Wenn das Verteidigende Pokémon schläft, entferne 4 Schadensmarken von Darkrai."
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

	thirdParty: {
		cardmarket: 278052,
		tcgplayer: 84700
	}
}

export default card

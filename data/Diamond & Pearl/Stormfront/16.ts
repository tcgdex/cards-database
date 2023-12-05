import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
		de: "Drifzepeli"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Delivery",
				fr: "Livraison",
				de: "Anlieferung"
			},
			effect: {
				en: "Put any 1 card from your discard pile into your hand.",
				fr: "Placez dans votre main n'importe quelle carte de votre pile de défausse.",
				de: "Wähle 1 Karte aus deinem Ablagestapel und nimm sie auf deine Hand."
			},

		},
		{

			name: {
				en: "Lifting",
				fr: "Élévation",
				de: "Hochziehen"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. For each Basic Pokémon you put onto your Bench, you may search your deck for a basic Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 Pokémon de base et placez-les sur votre Banc. Pour chaque Pokémon de base que vous placez sur votre Banc, vous pouvez choisir dans votre deck une carte Énergie de base et l'attacher à ce Pokémon. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon-Karten und lege sie auf deine Bank. Für jedes Basis-Pokémon, das du auf diese Weise auf deine Bank gelegt hast, kannst du dein Deck nach 1 Basis-Energiekarte durchsuchen und an dieses Pokémon anlegen. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Ominous Wind",
				fr: "Vent Mauvais",
				de: "Unheilböen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt und kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card

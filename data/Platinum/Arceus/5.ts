import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Luxray",
		de: "Luxtra"
	},
	illustrator: "kawayoo",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		405,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Luxio",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Flash",
				de: "Blitz"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gadget Bolt",
				de: "Zubehörschuss"
			},
			effect: {
				en: "If Luxray has a Pokémon Tool card attached to it, you may do 100 damage instead of 60 to the Defending Pokémon. If you do, discard that Pokémon Tool card.",
				de: "Wenn an Luxtra 1 Pokémon-Ausrüstung angelegt ist, kannst du diesen Angiff dem Verteidigenden Pokémon 100 Schadenspunkte anstelle von 60 Schadenspunkten zufügen lassen. Wenn du das machst, lege die Pokémon-Ausrüstung auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card

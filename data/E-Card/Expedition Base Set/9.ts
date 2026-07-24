import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Elekid",
		fr: "Dracolosse",
		de: "Dragoran"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [239],

	hp: 30,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco"
	},

	stage: "Baby",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Tailwind",
				fr: "Vent arrière",
				de: "Rückenwind"
			},
			effect: {
				en: "Once during your turn (before you attack), if Dragonite is on your Bench, you may reduce your Active Pokémon's Retreat cost to 0.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Dracolosse est sur votre Banc, vous pouvez réduire le Coût de Retraite de votre Pokémon Actif à 0.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls Dragoran auf deiner Bank ist, die Rückzugskosten deines Aktiven Pokémon auf 0 reduzieren."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Water",
				"Fighting",
			],
			name: {
				en: "Energy Kick",
				fr: "Queue de dragon",
				de: "Drachenschwanz"
			},
			effect: {
				en: "Flip a coin. If heads, choose an Energy card attached to the Defending Pokémon. Your opponent moves that card to 1 of his or her other Pokémon. (If your opponent has no Benched Pokémon, this attack does nothing.)",
				fr: "Lancez 2 pièces. Cette attaque fait 40 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40x",

		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84910,
				cardmarket: 274884
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card

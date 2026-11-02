import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Carnivine",
		de: "Venuflibis"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		455,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
				de: "Runterschlucken"
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Carnivine. If the Defending Pokémon has fewer remaining HP than Carnivine’s, this attack does 60 damage instead.",
				de: "Bevor der Schaden zugefügt wird, vergleiche die verbliebenen KP von dem Verteidigenden Pokémon und Venuflibis. Wenn das Verteidigende Pokémon weniger verbliebene KP hat als Venuflibis, fügt dieser Angriff 60 Schadenspunkte zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Wring Out",
				de: "Auswringen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
				de: "Wirf 1 Münze. Bei „Kopf“ lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners und das Verteidigende Pokémon ist jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	description: {
		en: "It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.",
		de: "Sein süßlich riechender Speichel zieht Beute an, die es frisst. Es braucht einen Tag, sie zu fressen."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278408,
				tcgplayer: 84100
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278408,
				tcgplayer: 84100
			}
		},
	],
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
		de: "Venuflibis"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
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
				fr: "Engloutir",
				de: "Runterschlucken"
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Carnivine. If the Defending Pokémon has fewer remaining HP than Carnivine's, this attack does 60 damage instead.",
				fr: "Avant d'infliger des dégâts, comptabilisez les PV restants du Pokémon Défenseur et de Vortente. Si le Pokémon Défenseur possède moins de PV que Vortente, cette attaque inflige 60 dégâts.",
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
				fr: "Essorage",
				de: "Auswringen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et défaussez alors une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners und das Verteidigende Pokémon ist jetzt gelähmt."
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

	retreat: 1,

	description: {
		fr: "Il attire sa proie avec sa salive odorante avant de la croquer. Il lui faut une journée pour l'avaler."
	},

	thirdParty: {
		cardmarket: 277520
	}
}

export default card

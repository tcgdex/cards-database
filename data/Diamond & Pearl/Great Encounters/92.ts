import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Volbeat",
		fr: "Muciole",
		de: "Volbeat"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		313,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Light Conduct",
				fr: "Conducteur de lumière",
				de: "Lichtleiter"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Illumise in play, you may search your discard pile for a Supporter card, show it to your opponent, and put it on top of your deck. This power can't be used if Volbeat is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez Lumivole en jeu, vous pouvez choisir dans votre pile de défausse une carte Supporter. Montrez-la à votre adversaire et placez-la au dessus de votre deck. Ce pouvoir ne peut pas être utilisé si Muciole est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Illumise im Spiel hast, deinen Ablagestapel nach 1 Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und auf dein Deck legen. Diese Poké-Power kann nicht benutzt werden, wenn Volbeat von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Firefly Light",
				fr: "Lumière de luciole",
				de: "Leuchtkäferglühen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
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

	retreat: 1,



}

export default card

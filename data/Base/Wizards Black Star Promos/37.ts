import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		de: "Kapoera"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Repeating Kick",
				fr: "Coup de pied rafale",
				de: "Dauertritte"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à obtenir pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf eine Münze, bis „Zahl“ kommt. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour Rapide",
				de: "Turbodreher"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec son Pokémon Actif, ensuite, si vous avez des Pokémon sur votre banc, vous choisissez l'un d'eux et vous l'échangez avec votre Pokémon Actif. (Infligez les dégâts avant d'échanger les Pokémon).",
				de: "Wenn dein Gegner mindestens ein Pokémon auf seiner Bank hat, wählt er eines davon und tauscht es mit seinem aktiven Pokémon aus. (Füge die Schadenspunkte vor dem Austauschen der Pokémon zu.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground.",
		fr: "Il lance des coups de pieds tournant. S'il tournoie assez vite, il peut s'enfoncer dans le sol.",
		de: "Es verteilt Tritte, während es sich dreht. Wenn es sich zu schnell dreht, kann es passieren, dass es sich in den Boden hineinschraubt."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86112
			},
		}
	]
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano"
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		58,
	],
	hp: 50,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Roar",
				fr: "Hurlement",
				de: "Gebrüll"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches the Defending Pokémon with it.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange contre le Pokémon Défenseur.",
				de: "Wenn dein Gegner mindestens ein Pokémon auf der Bank hat, wählt er 1 davon und tauscht es mit dem Verteidigenden Pokémon aus."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Firebreathing",
				fr: "Souffle-feu",
				de: "Feuerhauch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card

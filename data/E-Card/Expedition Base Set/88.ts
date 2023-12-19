import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pidgeotto",
		fr: "Roucoups",
		de: "Tauboga"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		17,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pidgey",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches the Defending Pokémon with it. (Do the damage before switching the Pokémon.",
				fr: "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange contre le Pokémon Défenseur. (Infligez les dégâts avant d'échanger les Pokémon.)",
				de: "Wenn dein Gegner mindestens ein Pokémon auf der Bank hat, wählt er 1 davon und tauscht es mit dem Verteidigenden Pokémon aus. (Füge die Schadenspunkte vor dem Austauschen der Pokémon zu.)"
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card

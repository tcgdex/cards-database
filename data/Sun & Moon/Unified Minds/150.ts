import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
	},
	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		148,
	],
	hp: 100,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
				es: "Coletón",
				it: "Codabotta",
				pt: "Surra de Cauda",
				de: "Schweifvertrimmer"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Whirlpool",
				fr: "Siphon Destructeur",
				es: "Torbellino Destructivo",
				it: "Rompivortice",
				pt: "Redemoinho Destruidor",
				de: "Schrecklicher Strudel"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card

import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
		es: "Stoutland",
		it: "Stoutland",
		pt: "Stoutland",
		de: "Bissbark"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		508,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
		es: "Herdier",
		it: "Herdier",
		pt: "Herdier",
		de: "Terribark"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite Off",
				fr: "Arrachage",
				es: "Despedazar",
				it: "Addentare",
				pt: "Mordida Estraçalhante",
				de: "Abbeißen"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, esse ataque causará 60 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Barking",
				fr: "Aboiement Sauvage",
				es: "Ladrido Furioso",
				it: "Abbaiare Furioso",
				pt: "Latido Selvagem",
				de: "Wildes Gebell"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Esse ataque causa 20 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card

import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Swoobat",
		fr: "Rhinolove",
		es: "Swoobat",
		it: "Swoobat",
		pt: "Swoobat",
		de: "Fletiamo"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		528,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Woobat",
		fr: "Chovsourir",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
				es: "Supersónico",
				it: "Supersuono",
				pt: "Supersônico",
				de: "Superschall"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Charming Stamp",
				fr: "Trace Charmante",
				es: "Sello Cautivador",
				it: "Impronta Graziosa",
				pt: "Marca Encantadora",
				de: "Charmanter Stempel"
			},
			effect: {
				en: "Your opponent chooses 1 of their own Pokémon. This attack does 90 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Votre adversaire choisit l’un de ses propres Pokémon. Cette attaque inflige 90 dégâts à ce Pokémon-là. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Tu rival elige 1 de sus propios Pokémon. Este ataque hace 90 puntos de daño a ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Il tuo avversario sceglie uno dei suoi Pokémon. Questo attacco infligge 90 danni a quel Pokémon. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "O seu oponente escolhe 1 dos seus próprios Pokémon. Este ataque causa 90 pontos de dano àquele Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Dein Gegner wählt 1 seiner eigenen Pokémon. Diese Attacke fügt jenem Pokémon 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

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
			value: "-20"
		},
	],
	retreat: 1,



}

export default card

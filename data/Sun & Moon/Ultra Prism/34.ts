import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
		es: "Empoleon",
		it: "Empoleon",
		pt: "Empoleon",
		de: "Impoleon"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Total Command",
				fr: "Commande Totale",
				es: "Orden Total",
				it: "Comando Assoluto",
				pt: "Comando Total",
				de: "Absolutes Gebot"
			},
			effect: {
				en: "This attack does 20 damage for each Benched Pokémon (both yours and your opponent’s).",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				es: "Este ataque hace 20 puntos de daño por cada Pokémon en Banca (tanto tuyos como de tu rival).",
				it: "Questo attacco infligge 20 danni per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano para cada Pokémon no Banco (seus e do seu oponente).",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf der Bank (deiner und der deines Gegners) zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Whirlpool",
				fr: "Siphon",
				es: "Torbellino",
				it: "Mulinello",
				pt: "Redemoinho",
				de: "Whirlpool"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 315965
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon",
		'es-es': "Empoleon",
		'it-it': "Empoleon",
		'pt-br': "Empoleon",
		'de-de': "Impoleon"
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
		"Metal",
	],

	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Total Command",
				'fr-fr': "Commande Totale",
				'es-es': "Orden Total",
				'it-it': "Comando Assoluto",
				'pt-br': "Comando Total",
				'de-de': "Absolutes Gebot"
			},
			effect: {
				'en-us': "This attack does 20 damage for each Benched Pokémon (both yours and your opponent’s).",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en Banca (tanto tuyos como de tu rival).",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon no Banco (seus e do seu oponente).",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf der Bank (deiner und der deines Gegners) zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Whirlpool",
				'fr-fr': "Siphon",
				'es-es': "Torbellino",
				'it-it': "Mulinello",
				'pt-br': "Redemoinho",
				'de-de': "Whirlpool"
			},
			effect: {
				'en-us': "Discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The three horns that extend from its beak attest to its power. The leader has the biggest horns.",
	},

	thirdParty: {
		cardmarket: 355595,
		tcgplayer: 165737
	}
}

export default card

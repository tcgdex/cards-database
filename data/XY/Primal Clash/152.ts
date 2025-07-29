import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Sharpedo EX",
		fr: "Sharpedo EX",
		es: "Sharpedo EX",
		it: "Sharpedo EX",
		pt: "Sharpedo EX",
		de: "Tohaido EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 170,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Hunt",
				fr: "Chasse",
				es: "Caza",
				it: "Agguato",
				pt: "Caçada",
				de: "Jagd"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente. Este ataque causa 30 de danos ao novo Pokémon Ativo.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Dieser Angriff fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Jagged Fang",
				fr: "Croc Acéré",
				es: "Colmillo Mellado",
				it: "Fauci Taglienti",
				pt: "Presa Lascada",
				de: "Schneidezahn"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon. Then, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon. Ensuite, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía unida a este Pokémon. Después, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Scarta un'Energia assegnata a questo Pokémon. Poi, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia ligada a este Pokémon. Em seguida, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel. Lege anschließend 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 273622
	}
}

export default card

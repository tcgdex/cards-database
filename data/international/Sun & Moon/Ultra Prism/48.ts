import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		405,
	],

	hp: 150,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Intimidating Fang",
				'fr-fr': "Croc Intimidant",
				'es-es': "Colmillo Intimidatorio",
				'it-it': "Spaventazanna",
				'pt-br': "Presa Intimidadora",
				'de-de': "Hammerhauer"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent’s Active Pokémon’s attacks do 30 less damage (before applying Weakness and Resistance).",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, los ataques del Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi del Pokémon attivo del tuo avversario infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, os ataques do Pokémon Ativo do seu oponente causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, fügen die Attacken des Aktiven Pokémon deines Gegners 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Volt Bolt",
				'fr-fr': "Flèche Survoltée",
				'es-es': "Flecha Eléctrica",
				'it-it': "Lampovolt",
				'pt-br': "Raio de Energia",
				'de-de': "Strombolzen"
			},
			effect: {
				'en-us': "Discard all Lightning Energy from this Pokémon. This attack does 150 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez toute l’Énergie Lightning de ce Pokémon. Cette attaque inflige 150 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Descarta todas las Energías Lightning de este Pokémon. Este ataque hace 150 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Scarta tutte le Energie Lightning assegnate a questo Pokémon. Questo attacco infligge 150 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Descarte todas as Energias Lightning deste Pokémon. Este ataque causa 150 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 150 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Luxray's ability to see through objects comes in handy when it's scouting for danger.",
	},

	thirdParty: {
		cardmarket: 315978,
		tcgplayer: 157665
	}
}

export default card

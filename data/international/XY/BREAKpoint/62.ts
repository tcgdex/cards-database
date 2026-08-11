import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Aegislash",
		'fr-fr': "Exagide",
		'es-es': "Aegislash",
		'it-it': "Aegislash",
		'pt-br': "Aegislash",
		'de-de': "Durengard"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
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
				'en-us': "Painful Sword",
				'fr-fr': "Lame Douloureuse",
				'es-es': "Espada Dolorosa",
				'it-it': "Spada Funesta",
				'pt-br': "Espada Dolorosa",
				'de-de': "Schwertschmerz"
			},
			effect: {
				'en-us': "Double the number of damage counters on each of your opponent's Pokémon.",
				'fr-fr': "Doublez le nombre de marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
				'es-es': "Dobla el número de contadores de daño en cada uno de los Pokémon de tu rival.",
				'it-it': "Raddoppia il numero di segnalini danno su ciascuno dei Pokémon del tuo avversario.",
				'pt-br': "Duplique o número de contadores de danos em cada um dos Pokémon do seu oponente.",
				'de-de': "Verdopple die Anzahl der Schadensmarken auf jedem Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Megaton Slash",
				'fr-fr': "Tranche Mégatonne",
				'es-es': "Cuchillada Megatón",
				'it-it': "Squarcio Megatonico",
				'pt-br': "Talho Megaton",
				'de-de': "Megatonnenschlitzer"
			},
			effect: {
				'en-us': "This attack does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 de danos a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Apparently, it can detect innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.",
	},

	thirdParty: {
		cardmarket: 288237,
		tcgplayer: 111603
	}
}

export default card

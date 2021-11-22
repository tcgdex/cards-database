import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		it: "Aegislash",
		pt: "Aegislash",
		de: "Durengard"
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
		en: "Doublade",
		fr: "Dimoclès",
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
				en: "Painful Sword",
				fr: "Lame Douloureuse",
				es: "Espada Dolorosa",
				it: "Spada Funesta",
				pt: "Espada Dolorosa",
				de: "Schwertschmerz"
			},
			effect: {
				en: "Double the number of damage counters on each of your opponent's Pokémon.",
				fr: "Doublez le nombre de marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
				es: "Dobla el número de contadores de daño en cada uno de los Pokémon de tu rival.",
				it: "Raddoppia il numero di segnalini danno su ciascuno dei Pokémon del tuo avversario.",
				pt: "Duplique o número de contadores de danos em cada um dos Pokémon do seu oponente.",
				de: "Verdopple die Anzahl der Schadensmarken auf jedem Pokémon deines Gegners."
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
				en: "Megaton Slash",
				fr: "Tranche Mégatonne",
				es: "Cuchillada Megatón",
				it: "Squarcio Megatonico",
				pt: "Talho Megaton",
				de: "Megatonnenschlitzer"
			},
			effect: {
				en: "This attack does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 de danos a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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



}

export default card

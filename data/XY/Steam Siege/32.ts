import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Samurott",
		fr: "Clamiral",
		es: "Samurott",
		it: "Samurott",
		pt: "Samurott",
		de: "Admurai"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		503,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ultimate Blade",
				fr: "Ultime Lame",
				es: "Tajo Definitivo",
				it: "Lamafinale",
				pt: "Lâmina Soberana",
				de: "Vollendete Klinge"
			},
			effect: {
				en: "If the damage from this attack reduces your opponent’s Active Pokémon’s HP to 60 or less, that Pokémon is Knocked Out.",
				fr: "Si les dégâts de cette attaque réduisent les PV du Pokémon Actif de votre adversaire à 60 ou moins, ce dernier est mis K.O.",
				es: "Si el daño de este ataque reduce los PS del Pokémon Activo de tu rival a 60 o menos, ese Pokémon queda Fuera de Combate.",
				it: "Se i danni di questo attacco riducono i PS del Pokémon attivo del tuo avversario a 60 o meno, quel Pokémon viene messo KO.",
				pt: "Se os danos deste ataque reduzirem o PS do Pokémon Ativo do seu oponente para 60 ou menos, aquele Pokémon será Nocauteado.",
				de: "Wenn der Schaden dieses Angriffs die KP des Aktiven Pokémon deines Gegners auf 60 oder weniger reduziert, wird jenes Pokémon kampfunfähig."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Pike",
				fr: "Javelot",
				es: "Lanza",
				it: "Picca",
				pt: "Lança",
				de: "Langspieß"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card

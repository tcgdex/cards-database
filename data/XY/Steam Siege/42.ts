import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		es: "Galvantula",
		it: "Galvantula",
		pt: "Galvantula",
		de: "Voltula"
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		596,
	],
	hp: 90,
	types: [
		"Lightning",
		"Grass",
	],
	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
		es: "Joltik",
		it: "Joltik",
		pt: "Joltik",
		de: "Wattzapf"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Thread",
				fr: "Double Fil",
				es: "Hilo Doble",
				it: "Doppiofilo",
				pt: "Fio Duplo",
				de: "Doppelter Faden"
			},
			effect: {
				en: "This attack does 30 damage to 2 of your opponent's Benched Pokémon. Apply Weakness and Resistance.",
				fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. Appliquez aussi la Faiblesse et la Résistance.",
				es: "Este ataque hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. Aplica Debilidad y Resistencia.",
				it: "Questo attacco infligge 30 danni a due dei Pokémon in panchina del tuo avversario. Ricorda di applicare debolezza e resistenza.",
				pt: "Este ataque causa 30 de danos a 2 dos Pokémon no Banco do seu oponente. Aplique Fraqueza e Resistência.",
				de: "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. Wende Schwäche und Resistenz an."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electroweb",
				fr: "Toile Élek",
				es: "Electrotela",
				it: "Elettrotela",
				pt: "Teia Elétrica",
				de: "Elektronetz"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

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
	retreat: 1,



}

export default card

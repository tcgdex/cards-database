import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		604,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dark Clamp",
				fr: "Pince des Ténèbres",
				es: "Tenaza Oscura",
				it: "Buiotenaglia",
				pt: "Grampo da Escuridão",
				de: "Dunkler Klammergriff"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Vacuum Bolt",
				fr: "Éclair Aspiré",
				es: "Rayo Ventosa",
				it: "Vuotobolide",
				pt: "Aspirador de Raio",
				de: "Saugblitz"
			},
			effect: {
				en: "You may do 80 more damage. If you do, this attack does 80 damage to 1 of your Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez infliger 80 dégâts supplémentaires. Dans ce cas, cette attaque inflige 80 dégâts à l’un de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Puedes hacer 80 puntos de daño más. Si lo haces, este ataque hace 80 puntos de daño a 1 de tus Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Puoi infliggere 80 danni in più. Se lo fai, questo attacco infligge 80 danni a uno dei tuoi Pokémon. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Você pode causar 80 pontos de dano a mais. Se fizer isto, este ataque causará 80 pontos de dano a 1 dos seus Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Du kannst 80 Schadenspunkte mehr zufügen. Wenn du das machst, fügt diese Attacke 1 deiner Pokémon 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: "80+",

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
	retreat: 3,



}

export default card

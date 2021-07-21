import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
		es: "Espeon",
		it: "Espeon",
		pt: "Espeon",
		de: "Psiana"
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Allure",
				fr: "Allure",
				es: "Atractivo",
				it: "Affascinante",
				pt: "Fascinar",
				de: "Verlockung"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				es: "Roba 3 cartas.",
				it: "Pesca tre carte.",
				pt: "Compre 3 cartas.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Crush",
				fr: "Écras’Énergie",
				es: "Comprimir Energía",
				it: "Sgretolenergia",
				pt: "Esmagamento de Energia",
				de: "Zermalmende Energie"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Energy attached to all of your opponent’s Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées aux Pokémon de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía unida a todos los Pokémon de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai Pokémon del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia ligada a todos os Pokémon do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an alle Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card

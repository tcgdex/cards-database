import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
		es: "Magmortar",
		it: "Magmortar",
		pt: "Magmortar",
		de: "Magbrant"
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
		es: "Magmar",
		it: "Magmar",
		pt: "Magmar",
		de: "Magmar"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Charge",
				fr: "Nitrocharge",
				es: "Nitrocarga",
				it: "Nitrocarica",
				pt: "Ataque de Chamas",
				de: "Nitroladung"
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho um card de Energia Fire e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twin Bursts",
				fr: "Explosions en Duo",
				es: "Estallidos Gemelos",
				it: "Scoppiogemello",
				pt: "Erupções Gêmeas",
				de: "Doppelsalve"
			},
			effect: {
				en: "If Electivire is on your Bench, this attack does 80 more damage.",
				fr: "Si Élekable est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si Electivire está en tu Banca, este ataque hace 80 puntos de daño más.",
				it: "Se Electivire è nella tua panchina, questo attacco infligge 80 danni in più.",
				pt: "Se Electivire estiver em seu Banco, este ataque causará 80 de danos adicionais.",
				de: "Wenn sich Elevoltek auf deiner Bank befindet, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card

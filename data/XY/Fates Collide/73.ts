import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Kingdra EX",
		fr: "Hyporoi EX",
		es: "Kingdra EX",
		it: "Kingdra EX",
		pt: "Kingdra EX",
		de: "Seedraking EX"
	},

	illustrator: "hatachu",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 170,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Storm",
				fr: "Forte Tempête",
				es: "Gran Tempestad",
				it: "Fortempesta",
				pt: "Tempestade Enorme",
				de: "Großer Sturm"
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
				es: "Descarta cualquier carta de Estadio en juego.",
				it: "Scarta una carta Stadio in gioco.",
				pt: "Descarte qualquer card de Estádio em jogo.",
				de: "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Trail",
				fr: "Draco-Traînée",
				es: "Rastro de Dragón",
				it: "Dragotraccia",
				pt: "Trilha do Dragão",
				de: "Drachenspur"
			},
			effect: {
				en: "This attack does 30 more damage for each basic Lightning Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Lightning de base attachée à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía Básica Lightning unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia base Lightning assegnata a questo Pokémon.",
				pt: "Este ataque causa 30 de danos adicionais para cada Energia básica Lightning ligada a este Pokémon.",
				de: "Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Lightning-Basis-Energien zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 289894,
		tcgplayer: 117848
	}
}

export default card

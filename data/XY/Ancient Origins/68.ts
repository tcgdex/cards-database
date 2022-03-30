import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Lugia EX",
		fr: "Lugia EX",
		es: "Lugia EX",
		it: "Lugia EX",
		pt: "Lugia EX",
		de: "Lugia EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 170,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aero Ball",
				fr: "Aéro Ball",
				es: "Bola Aérea",
				it: "Aerosfera",
				pt: "Aerobola",
				de: "Luftball"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to both Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs.",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
				it: "Questo attacco infligge 20 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				pt: "Este ataque causa 20 de danos vezes a quantidade de Energia ligada a ambos os Pokémon Ativos.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deep Hurricane",
				fr: "Ouragan Intense",
				es: "Huracán Profundo",
				it: "Uragano Abissale",
				pt: "Furacão Profundo",
				de: "Unterwasser-Orkan"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 70 more damage. Then, discard that Stadium card.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 70 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 70 puntos de daño más. Después, descarta esa carta de Estadio.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 70 danni in più. Poi, scarta quella carta Stadio.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 70 de danos adicionais. Em seguida, descarte o card de Estádio.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 70 weitere Schadenspunkte zu. Lege diese Stadionkarte anschließend auf den Ablagestapel."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card

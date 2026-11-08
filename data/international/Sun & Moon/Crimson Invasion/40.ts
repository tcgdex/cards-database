import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'es-es': "Mismagius",
		'it-it': "Mismagius",
		'pt-br': "Mismagius",
		'de-de': "Traunmagil"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		429,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Chaos Wheel",
				'fr-fr': "Roue Chaotique",
				'es-es': "Rueda Caos",
				'it-it': "Ruotacaos",
				'pt-br': "Roda do Caos",
				'de-de': "Wirrsalsrad"
			},
			effect: {
				'en-us': "Your opponent can’t play any Pokémon Tool, Special Energy, or Stadium cards from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Outil Pokémon, Énergie spéciale ou Stade de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Herramienta Pokémon, Energía Especial o Estadio de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare carte Oggetto Pokémon, Energia speciale o Stadio dalla sua mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhuma carta de Ferramenta Pokémon, Energia Especial ou Estádio da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Pokémon-Ausrüstungen, Spezial-Energien oder Stadionkarten aus seiner Hand spielen."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Arts",
				'fr-fr': "Arts Occultes",
				'es-es': "Artes Siniestras",
				'it-it': "Arti Occulte",
				'pt-br': "Artes Ocultas",
				'de-de': "Schwarze Kunst"
			},
			effect: {
				'en-us': "This attack does 20 damage for each card in your opponent’s hand.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte dans la main de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival.",
				'it-it': "Questo attacco infligge 20 danni per ogni carta che ha in mano il tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada carta na mão do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Karten auf der Hand deines Gegners zu."
			},
			damage: "20×",

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

	retreat: 1,

	description: {
		'en-us': "It appears as if from nowhere—muttering incantations, placing curses, and giving people terrifying visions.",
	},

	thirdParty: {
		cardmarket: 311890,
		tcgplayer: 149063
	}
}

export default card

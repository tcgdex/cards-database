import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Mismagius",
		fr: "Magirêve",
		es: "Mismagius",
		it: "Mismagius",
		pt: "Mismagius",
		de: "Traunmagil"
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
		en: "Misdreavus",
		fr: "Feuforêve",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Chaos Wheel",
				fr: "Roue Chaotique",
				es: "Rueda Caos",
				it: "Ruotacaos",
				pt: "Roda do Caos",
				de: "Wirrsalsrad"
			},
			effect: {
				en: "Your opponent can’t play any Pokémon Tool, Special Energy, or Stadium cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Outil Pokémon, Énergie spéciale ou Stade de sa main pendant son prochain tour.",
				es: "Tu rival no puede jugar ninguna carta de Herramienta Pokémon, Energía Especial o Estadio de su mano durante su próximo turno.",
				it: "Il tuo avversario non può giocare carte Oggetto Pokémon, Energia speciale o Stadio dalla sua mano durante il suo prossimo turno.",
				pt: "Seu oponente não poderá jogar nenhuma carta de Ferramenta Pokémon, Energia Especial ou Estádio da própria mão durante a próxima vez dele(a) jogar.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Pokémon-Ausrüstungen, Spezial-Energien oder Stadionkarten aus seiner Hand spielen."
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
				en: "Dark Arts",
				fr: "Arts Occultes",
				es: "Artes Siniestras",
				it: "Arti Occulte",
				pt: "Artes Ocultas",
				de: "Schwarze Kunst"
			},
			effect: {
				en: "This attack does 20 damage for each card in your opponent’s hand.",
				fr: "Cette attaque inflige 20 dégâts pour chaque carte dans la main de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival.",
				it: "Questo attacco infligge 20 danni per ogni carta che ha in mano il tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano para cada carta na mão do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Karten auf der Hand deines Gegners zu."
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



}

export default card

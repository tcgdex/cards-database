import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Black Kyurem",
		fr: "Kyurem Noir",
		es: "Kyurem Negro",
		it: "Kyurem Nero",
		pt: "Kyurem Preto",
		de: "Schwarzes Kyurem"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frozen Wings",
				fr: "Ailes Gelées",
				es: "Alas Congeladas",
				it: "Alighiacciate",
				pt: "Asas Congeladas",
				de: "Starre Schwingen"
			},
			effect: {
				en: "Discard a Special Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dazzling Blizzard",
				fr: "Blizzard Éblouissant",
				es: "Ventisca Deslumbrante",
				it: "Tempesta Accecante",
				pt: "Nevasca Deslumbrante",
				de: "Blendender Blizzard"
			},
			effect: {
				en: "If you have any Stadium card in play, this attack does 100 more damage.",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires.",
				es: "Si tienes alguna carta de Estadio en juego, este ataque hace 100 puntos de daño más.",
				it: "Se hai in gioco una carta Stadio, questo attacco infligge 100 danni in più.",
				pt: "Se você tiver qualquer carta de Estádio em jogo, este ataque causará 100 pontos de dano a mais.",
				de: "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card

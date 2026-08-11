import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Black Kyurem",
		'fr-fr': "Kyurem Noir",
		'es-es': "Kyurem Negro",
		'it-it': "Kyurem Nero",
		'pt-br': "Kyurem Preto",
		'de-de': "Schwarzes Kyurem"
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
				'en-us': "Frozen Wings",
				'fr-fr': "Ailes Gelées",
				'es-es': "Alas Congeladas",
				'it-it': "Alighiacciate",
				'pt-br': "Asas Congeladas",
				'de-de': "Starre Schwingen"
			},
			effect: {
				'en-us': "Discard a Special Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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
				'en-us': "Dazzling Blizzard",
				'fr-fr': "Blizzard Éblouissant",
				'es-es': "Ventisca Deslumbrante",
				'it-it': "Tempesta Accecante",
				'pt-br': "Nevasca Deslumbrante",
				'de-de': "Blendender Blizzard"
			},
			effect: {
				'en-us': "If you have any Stadium card in play, this attack does 100 more damage.",
				'fr-fr': "Si vous avez une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires.",
				'es-es': "Si tienes alguna carta de Estadio en juego, este ataque hace 100 puntos de daño más.",
				'it-it': "Se hai in gioco una carta Stadio, questo attacco infligge 100 danni in più.",
				'pt-br': "Se você tiver qualquer carta de Estádio em jogo, este ataque causará 100 pontos de dano a mais.",
				'de-de': "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 100 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "This legendary ice Pokémon waits for a hero to fill in the missing parts of its body with truth or ideals.",
	},

	thirdParty: {
		cardmarket: 407954,
		tcgplayer: 201237
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [639],

	name: {
		'en-us': "Terrakion",
		'fr-fr': "Terrakium",
		'es-es': "Terrakion",
		'it-it': "Terrakion",
		'pt-br': "Terrakion",
		'de-de': "Terrakium"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Guard Press",
				'fr-fr': "Pression de Garde",
				'es-es': "Presión de Guardia",
				'it-it': "Pressadifesa",
				'pt-br': "Aperto Protetor",
				'de-de': "Schutzdruck"
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Earthen Power",
				'fr-fr': "Puissance Tellurique",
				'es-es': "Poder Terrestre",
				'it-it': "Terrapotenza",
				'pt-br': "Poder Terrestre",
				'de-de': "Erdenkraft"
			},
			effect: {
				'en-us': "If you have a Stadium in play, this attack does 80 more damage.",
				'fr-fr': "Si vous avez un Stade en jeu, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si tienes un Estadio en juego, este ataque hace 80 puntos de daño más.",
				'it-it': "Se hai in gioco una carta Stadio, questo attacco infligge 80 danni in più.",
				'pt-br': "Se você tiver um Estádio em jogo, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn du eine Stadionkarte im Spiel hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It has phenomenal power. It will mercilessly crush anyone or anything that bullies small Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511880,
				tcgplayer: 226531
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511880,
				tcgplayer: 226531
			}
		},
	],
}

export default card

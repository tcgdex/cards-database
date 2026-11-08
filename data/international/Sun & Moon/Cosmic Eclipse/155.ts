import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Sylveon",
		'fr-fr': "Nymphali",
		'es-es': "Sylveon",
		'it-it': "Sylveon",
		'pt-br': "Sylveon",
		'de-de': "Feelinara"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		700,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Moonblast",
				'fr-fr': "Pouvoir Lunaire",
				'es-es': "Fuerza Lunar",
				'it-it': "Forza Lunare",
				'pt-br': "Explosão Lunar",
				'de-de': "Mondgewalt"
			},
			effect: {
				'en-us': "During your opponent’s next turn, the Defending Pokémon’s attacks do 30 less damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beloved Pulse",
				'fr-fr': "Impulsion Aimée",
				'es-es': "Pulso Querido",
				'it-it': "Impulso Affettivo",
				'pt-br': "Pulso Amado",
				'de-de': "Inniger Impuls"
			},
			effect: {
				'en-us': "If you played a TAG TEAM Supporter card from your hand during this turn, this attack does 80 more damage.",
				'fr-fr': "Si vous avez joué une carte Supporter ESCOUADE de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si has jugado 1 carta de Partidario de equipo de RELEVOS de tu mano durante este turno, este ataque hace 80 puntos de daño más.",
				'it-it': "Se hai giocato una carta Aiuto ALLEATI dalla tua mano durante questo turno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se você jogou 1 carta de Apoiador ALIADOS da sua mão durante esta vez de jogar, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn du eine TAG TEAM Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Once a fight breaks out, it will unflinchingly charge at dragon Pokémon that are many times larger than itself.",
	},

	thirdParty: {
		cardmarket: 408419,
		tcgplayer: 201203
	}
}

export default card

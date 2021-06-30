import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Sylveon",
		fr: "Nymphali",
		es: "Sylveon",
		it: "Sylveon",
		pt: "Sylveon",
		de: "Feelinara"
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
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Moonblast",
				fr: "Pouvoir Lunaire",
				es: "Fuerza Lunar",
				it: "Forza Lunare",
				pt: "Explosão Lunar",
				de: "Mondgewalt"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon’s attacks do 30 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
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
				en: "Beloved Pulse",
				fr: "Impulsion Aimée",
				es: "Pulso Querido",
				it: "Impulso Affettivo",
				pt: "Pulso Amado",
				de: "Inniger Impuls"
			},
			effect: {
				en: "If you played a TAG TEAM Supporter card from your hand during this turn, this attack does 80 more damage.",
				fr: "Si vous avez joué une carte Supporter ESCOUADE de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si has jugado 1 carta de Partidario de equipo de RELEVOS de tu mano durante este turno, este ataque hace 80 puntos de daño más.",
				it: "Se hai giocato una carta Aiuto ALLEATI dalla tua mano durante questo turno, questo attacco infligge 80 danni in più.",
				pt: "Se você jogou 1 carta de Apoiador ALIADOS da sua mão durante esta vez de jogar, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn du eine TAG TEAM Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
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



}

export default card

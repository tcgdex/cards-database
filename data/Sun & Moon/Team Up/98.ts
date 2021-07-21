import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		it: "Skarmory",
		pt: "Skarmory",
		de: "Panzaeron"
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		227,
	],
	hp: 110,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Calm Strike",
				fr: "Frappe Placide",
				es: "Golpe Calmado",
				it: "Colpo Impassibile",
				pt: "Golpe Calmo",
				de: "Gelassener Schlag"
			},
			effect: {
				en: "If you have used your GX attack, this attack does 70 more damage.",
				fr: "Si vous avez utilisé votre attaque GX, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si has usado tu ataque GX, este ataque hace 70 puntos de daño más.",
				it: "Se hai già usato il tuo attacco GX, questo attacco infligge 70 danni in più.",
				pt: "Se você usou seu ataque GX, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn du deine GX-Attacke eingesetzt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Wing",
				fr: "Aile d’Acier",
				es: "Ala de Acero",
				it: "Alacciaio",
				pt: "Asa de Aço",
				de: "Stahlflügel"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 90,

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
	retreat: 1,



}

export default card

import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Bagon",
		fr: "Draby",
		es: "Bagon",
		it: "Bagon",
		pt: "Bagon",
		de: "Kindwurm"
	},

	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		371,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rock Head",
				fr: "Tête de Roc",
				es: "Cabeza Roca",
				it: "Testadura",
				pt: "Cabeça de Pedra",
				de: "Steinhaupt"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 10 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361344
	}
}

export default card

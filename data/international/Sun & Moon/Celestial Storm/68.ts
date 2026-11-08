import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Deoxys",
		'fr-fr': "Deoxys",
		'es-es': "Deoxys",
		'it-it': "Deoxys",
		'pt-br': "Deoxys",
		'de-de': "Deoxys"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		386,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Reflect",
				'fr-fr': "Protection",
				'es-es': "Reflejo",
				'it-it': "Riflesso",
				'pt-br': "Refletir",
				'de-de': "Reflektor"
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 40 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 40 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 40 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 40 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Corkscrew",
				'fr-fr': "Vrille Psy",
				'es-es': "Tirabuzón Psíquico",
				'it-it': "Diretto Psichico",
				'pt-br': "Soco Giratório Psíquico",
				'de-de': "Psycho-Schraube"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "DNA from a space virus mutated and became a Pokémon. It appears where auroras are seen.",
	},

	thirdParty: {
		cardmarket: 361312,
		tcgplayer: 170890
	}
}

export default card

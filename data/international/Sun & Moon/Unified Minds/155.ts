import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'es-es': "Fraxure",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'de-de': "Sharfax"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		611,
	],

	hp: 90,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'en-us': "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Guillotine",
				'fr-fr': "Guillotine",
				'es-es': "Guillotina",
				'it-it': "Ghigliottina",
				'pt-br': "Guilhotina",
				'de-de': "Guillotine"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Their tusks can shatter rocks. Territory battles between Fraxure can be intensely violent.",
	},

	thirdParty: {
		cardmarket: 388567,
		tcgplayer: 195153
	}
}

export default card

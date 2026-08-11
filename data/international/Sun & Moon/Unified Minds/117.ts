import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'es-es': "Lucario",
		'it-it': "Lucario",
		'pt-br': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Tag Coach",
				'fr-fr': "Coaching d’Escouade",
				'es-es': "Instrucción Relevo",
				'it-it': "Istruttore Alleati",
				'pt-br': "Técnico de Aliados",
				'de-de': "Team-Trainer"
			},
			effect: {
				'en-us': "Your TAG TEAM Pokémon take 20 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				'fr-fr': "Vos Pokémon ESCOUADE subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de tu rival hacen 20 puntos de daño menos a tus Pokémon de equipo de RELEVOS (después de aplicar Debilidad y Resistencia).",
				'it-it': "I tuoi Pokémon ALLEATI subiscono 20 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Seus Pokémon ALIADOS recebem 20 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Deinen TAG TEAM Pokémon werden durch Attacken deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Cross",
				'fr-fr': "Passage Éclair",
				'es-es': "Puñetazo Mach",
				'it-it': "Incromach",
				'pt-br': "Cruzado Veloz",
				'de-de': "Tempo-Cross"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It concentrates its mental energy and fires off mysterious waves called auras, which can crush boulders of large size to dust.",
	},

	thirdParty: {
		cardmarket: 388387,
		tcgplayer: 195072
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Type: Null",
		'fr-fr': "Type:0",
		'es-es': "Código Cero",
		'it-it': "Tipo Zero",
		'pt-br': "Tipo Nulo",
		'de-de': "Typ:Null"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		772,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Armor Press",
				'fr-fr': "Pression Cuirassée",
				'es-es': "Presión Armadura",
				'it-it': "Pressarmatura",
				'pt-br': "Compressão de Armadura",
				'de-de': "Panzerpresse"
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
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Claw",
				'fr-fr': "Griffe Taillante",
				'es-es': "Garra Cuchillazo",
				'it-it': "Artigli Laceranti",
				'pt-br': "Garra Cortadora",
				'de-de': "Schlitzende Klaue"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The heavy control mask it wears suppresses its intrinsic capabilities. This Pokémon has some hidden special power.",
	},

	thirdParty: {
		cardmarket: 311936,
		tcgplayer: 149114
	}
}

export default card

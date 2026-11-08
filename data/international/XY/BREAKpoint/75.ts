import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		675,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Parting Shot",
				'fr-fr': "Dernier Mot",
				'es-es': "Última Palabra",
				'it-it': "Monito",
				'pt-br': "Tiro Divisor",
				'de-de': "Abgangstirade"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 60 (before applying Weakness and Resistance).",
				'fr-fr': "Échangez ce Pokémon avec l'un de vos Pokémon de Banc. Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 60 (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca. Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 60 (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Scambia questo Pokémon con uno della tua panchina. Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 60, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco. Na próxima vez de jogar do seu oponente, qualquer dano causado por ataques do Pokémon Defensor será reduzido em 60 (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 60 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Buster Swing",
				'fr-fr': "Repoussoir",
				'es-es': "Golpe Destructor",
				'it-it': "Colpaccio",
				'pt-br': "Gingado",
				'de-de': "Widerstandsbrecher"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "Os danos deste ataque não são afetados por Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It charges ahead and bashes its opponents like a berserker, uncaring about any hits it might take. Its arms are mighty enough to snap a telephone pole.",
	},

	thirdParty: {
		cardmarket: 288250,
		tcgplayer: 111614
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 100,

	types: [
		"Darkness",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Retaliate",
				'fr-fr': "Vengeance",
				'es-es': "Represalia",
				'it-it': "Nemesi",
				'pt-br': "Retaliação",
				'de-de': "Heimzahlung"
			},
			effect: {
				'en-us': "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 60 more damage.",
				'fr-fr': "Si l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 60 puntos de daño más.",
				'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco del tuo avversario durante il suo ultimo turno, questo attacco infligge 60 danni in più.",
				'pt-br': "Se qualquer um dos seus Pokémon tiver sido Nocauteado por danos causados pelo ataque de um oponente durante a última vez de jogar desse oponente, este ataque causará 60 de danos adicionais.",
				'de-de': "Falls eins deiner Pokémon während des letzten Zuges deines Gegners durch Schaden eines gegnerischen Angriffs kampfunfähig gemacht wurde, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Mach Claw",
				'fr-fr': "Instagriffe",
				'es-es': "Garra Mach",
				'it-it': "Artiglio Mach",
				'pt-br': "Garra Supersônica",
				'de-de': "Tempoklaue"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "Os danos deste ataque não são afetados por Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 60,

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

	retreat: 2,

	description: {
		'en-us': "Bisharp pursues prey in the company of a large group of Pawniard. Then Bisharp finishes off the prey.",
	},

	thirdParty: {
		cardmarket: 290991,
		tcgplayer: 120152
	}
}

export default card

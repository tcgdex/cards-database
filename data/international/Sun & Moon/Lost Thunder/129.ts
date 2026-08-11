import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Cobalion",
		'fr-fr': "Cobaltium",
		'es-es': "Cobalion",
		'it-it': "Cobalion",
		'pt-br': "Cobalion",
		'de-de': "Kobalium"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		638,
	],

	hp: 120,

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
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Arms",
				'fr-fr': "Bras Métalliques",
				'es-es': "Extremidades Metálicas",
				'it-it': "Arti Metallici",
				'pt-br': "Braços Metálicos",
				'de-de': "Metallarme"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, this attack does 40 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 40 puntos de daño más.",
				'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 40 danni in più.",
				'pt-br': "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 40 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		'en-us': "It has a body and heart of steel. It worked with its allies to punish people when they hurt Pokémon.",
	},

	thirdParty: {
		cardmarket: 365766,
		tcgplayer: 178944
	}
}

export default card

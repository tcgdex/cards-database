import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Solgaleo",
		'fr-fr': "Solgaleo",
		'es-es': "Solgaleo",
		'it-it': "Solgaleo",
		'pt-br': "Solgaleo",
		'de-de': "Solgaleo"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		791,
	],

	hp: 170,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Armor of the Sunne",
				'fr-fr': "Armure du Halo Solaire",
				'es-es': "Armadura de la Corona Solar",
				'it-it': "Armatura Solare",
				'pt-br': "Armadura Solar",
				'de-de': "Sonnenkreis-Rüstung"
			},
			effect: {
				'en-us': "If you have Lunala in play, your Solgaleo and Lunala take 50 less damage from your opponent’s attacks (after applying Weakness and Resistance). You can’t apply more than 1 Armor of the Sunne Ability at a time.",
				'fr-fr': "Si vous avez Lunala en jeu, vos Solgaleo et Lunala subissent 50 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Armure du Halo Solaire à la fois.",
				'es-es': "Si tienes a Lunala en juego, los ataques de tu rival hacen 50 puntos de daño menos a tus Solgaleo y Lunala (después de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Armadura de la Corona Solar a la vez.",
				'it-it': "Se hai Lunala in gioco, i tuoi Solgaleo e Lunala subiscono 50 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza. Può essere applicata solo un’abilità Armatura Solare alla volta.",
				'pt-br': "Se você tiver Lunala em jogo, seus Solgaleo e Lunala receberão 50 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Armadura Solar por vez.",
				'de-de': "Wenn du Lunala im Spiel hast, werden deinen Solgaleo und Lunala durch Attacken deines Gegners 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Du kannst immer nur jeweils 1 Fähigkeit Sonnenkreis-Rüstung einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sol Fangs",
				'fr-fr': "Crocs Solaires",
				'es-es': "Colmillos Solares",
				'it-it': "Zanne del Sole",
				'pt-br': "Caninos do Sol",
				'de-de': "Sonnenfänge"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 180,

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

	retreat: 3,

	description: {
		'en-us': "Sometimes the result of its opening an Ultra Wormhole is that energy and life-forms from other worlds are called here to this world.",
	},

	thirdParty: {
		cardmarket: 450388,
		tcgplayer: 201187
	}
}

export default card

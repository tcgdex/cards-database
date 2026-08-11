import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "M Audino EX",
		'fr-fr': "M-Nanméouïe EX",
		'es-es': "M-Audino EX",
		'it-it': "M Audino EX",
		'pt-br': "M-Audino EX",
		'de-de': "M-Ohrdoch EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 220,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Audino-EX",
		'fr-fr': "Nanméouïe-EX",
		'es-es': "Audino-EX",
		'it-it': "Audino-EX",
		'pt-br': "Audino-EX",
		'de-de': "Ohrdoch-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magical Symphony",
				'fr-fr': "Symphonie Magique",
				'es-es': "Sinfonía Mágica",
				'it-it': "Sinfonia Magica",
				'pt-br': "Sinfonia Mágica",
				'de-de': "Magische Sinfonie"
			},
			effect: {
				'en-us': "If you played a Supporter card from your hand during this turn, this attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 50 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Se você jogou um card de Apoiador da sua mão durante esta vez de jogar, este ataque causará 50 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Wenn du während dieses Zuges 1 Unterstützerkarte von deiner Hand gespielt hast, fügt dieser Angriff 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 117516
	}
}

export default card

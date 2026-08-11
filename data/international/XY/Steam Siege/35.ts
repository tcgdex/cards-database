import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Clawitzer BREAK",
		'fr-fr': "Gamblast TURBO",
		'es-es': "Clawitzer TURBO",
		'it-it': "Clawitzer TURBO",
		'pt-br': "Clawitzer TURBO",
		'de-de': "Wummer-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		693,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clawitzer",
		'fr-fr': "Gamblast",
		'es-es': "Clawitzer",
		'it-it': "Clawitzer",
		'pt-br': "Clawitzer",
		'de-de': "Wummer"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lock-On",
				'fr-fr': "Verrouillage",
				'es-es': "Fijar Blanco",
				'it-it': "Localizza",
				'pt-br': "Mirar",
				'de-de': "Zielschuss"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn. During your next turn, any damage done to that Pokémon by attacks is increased by 120 (after applying Weakness and Resistance).",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire. Pendant votre prochain tour, tous les dégâts infligés au Pokémon par des attaques sont augmentés de 120 (après application de la Faiblesse et de la Résistance).",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival. Durante tu próximo turno, cualquier daño hecho a ese Pokémon por ataques aumenta en 120 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi. Durante il tuo prossimo turno, i danni inflitti a quel Pokémon dagli attacchi sono aumentati di 120, dopo aver applicato debolezza e resistenza.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente. Durante sua próxima vez de jogar, qualquer dano causado àquele Pokémon por ataques será aumentado em 120 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen. Während deines nächsten Zuges wird Schaden, der jenem Pokémon durch Angriffe zugefügt wird, um 120 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 291531,
		tcgplayer: 121022
	}
}

export default card

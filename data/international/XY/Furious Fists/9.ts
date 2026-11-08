import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Accelgor",
		'fr-fr': "Limaspeed",
		'es-es': "Accelgor",
		'it-it': "Accelgor",
		'pt-br': "Accelgor",
		'de-de': "Hydragil"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		617,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'es-es': "Shelmet",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'de-de': "Schnuthelm"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Raid",
				'fr-fr': "Razzia Obscure",
				'es-es': "Raid Oscuro",
				'it-it': "Raid Oscuro",
				'pt-br': "Reide",
				'de-de': "Überfall"
			},
			effect: {
				'en-us': "If this Pokémon evolved from Shelmet during this turn, this attack does 40 more damage.",
				'fr-fr': "Si ce Pokémon a évolué d'Escargaume pendant ce tour, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si este Pokémon ha evolucionado de Shelmet durante este turno, este ataque hace 40 puntos de daño más.",
				'it-it': "Se questo Pokémon si è evoluto da Shelmet durante questo turno, questo attacco infligge 40 danni in più.",
				'pt-br': "Se este Pokémon evoluiu de Shelmet durante esta vez de jogar, esse ataque causará 40 de danos adicionais.",
				'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Schnuthelm entwickelt hat, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Afterimage Strike",
				'fr-fr': "Frap'Invisible",
				'es-es': "Golpe de Recuerdo",
				'it-it': "Colpo Alterimmagine",
				'pt-br': "Ataque Fantasma",
				'de-de': "Nachbild-Angriff"
			},
			effect: {
				'en-us': "If any damage is done to this Pokémon by attacks during your opponent's next turn, flip a coin. If heads, prevent that damage.",
				'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c'est face, évitez les dégâts.",
				'es-es': "Si se inflige cualquier daño a este Pokémon por ataques durante el próximo turno de tu rival, lanza 1 moneda. Si sale cara, evita ese daño.",
				'it-it': "Se questo Pokémon subisce danni da attacchi durante il prossimo turno del tuo avversario, lancia una moneta. Se esce testa, previeni quei danni.",
				'pt-br': "Se algum dano for causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente, jogue uma moeda. Se sair cara, o dano será evitado.",
				'de-de': "Wirf 1 Münze, wenn diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe Schaden zugefügt wird. Bei \"Kopf\" verhindere diesen Schaden."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Having removed its heavy shell, it becomes very light and can fight with ninja-like movements.",
	},

	thirdParty: {
		cardmarket: 281673,
		tcgplayer: 92178
	}
}

export default card

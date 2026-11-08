import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'pt-br': "Frogadier",
		'de-de': "Amphizel"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		657,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Afterimage Strike",
				'fr-fr': "Frap’Invisible",
				'es-es': "Golpe de Recuerdo",
				'it-it': "Colpo Alterimmagine",
				'pt-br': "Ataque Fantasma",
				'de-de': "Nachbild-Angriff"
			},
			effect: {
				'en-us': "If any damage is done to this Pokémon by attacks during your opponent’s next turn, flip a coin. If heads, prevent that damage.",
				'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c’est face, évitez ces dégâts.",
				'es-es': "Si se inflige cualquier daño a este Pokémon por ataques durante el próximo turno de tu rival, lanza 1 moneda. Si sale cara, evita ese daño.",
				'it-it': "Se questo Pokémon subisce danni da qualsiasi attacco durante il prossimo turno del tuo avversario, lancia una moneta. Se esce testa, previeni quei danni.",
				'pt-br': "Se qualquer dano for causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente, jogue 1 moeda. Se sair cara, prevenirá aquele dano.",
				'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere jenen Schaden bei Kopf."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.",
	},

	thirdParty: {
		cardmarket: 372343,
		tcgplayer: 189151
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 120,

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
				'en-us': "Scrunch",
				'fr-fr': "Compresse",
				'es-es': "Acurruque",
				'it-it': "Schiacciamento",
				'pt-br': "Esmigalhar",
				'de-de': "Zähneknirschen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti i danni da attacchi inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, impedirá todos os danos causados a este Pokémon por ataques durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe zugefügt wird."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-Edge",
				'fr-fr': "Damoclès",
				'es-es': "Doble Filo",
				'it-it': "Sdoppiatore",
				'pt-br': "Faca de Dois Gumes",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "This Pokémon does 80 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 80 dégâts.",
				'es-es': "Este Pokémon se hace 80 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 80 danni a se stesso.",
				'pt-br': "Este Pokémon causa 80 danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 80 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It lays several eggs a day. The eggs are apparently rich in nutrients and extremely delicious.",
	},

	thirdParty: {
		cardmarket: 293430,
		tcgplayer: 124083
	}
}

export default card

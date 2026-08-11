import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Quilladin",
		'fr-fr': "Boguérisse",
		'es-es': "Quilladin",
		'it-it': "Quilladin",
		'pt-br': "Quilladin",
		'de-de': "Igastarnish"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		651,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Chespin",
		'fr-fr': "Marisson",
		'es-es': "Chespin",
		'it-it': "Chespin",
		'pt-br': "Chespin",
		'de-de': "Igamaro"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
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
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe zugefügt würde."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Wood Hammer",
				'fr-fr': "Martobois",
				'es-es': "Mazazo",
				'it-it': "Mazzuolegno",
				'pt-br': "Martelo de Madeira",
				'de-de': "Holzhammer"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It relies on its sturdy shell to deflect predators' attacks. It counterattacks with its sharp quills.",
	},

	thirdParty: {
		cardmarket: 281350,
		tcgplayer: 88489
	}
}

export default card

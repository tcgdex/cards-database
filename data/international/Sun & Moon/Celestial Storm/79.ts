import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'es-es': "Claydol",
		'it-it': "Claydol",
		'pt-br': "Claydol",
		'de-de': "Lepumentas"
	},

	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Psy Bolt",
				'fr-fr': "Choc Mental",
				'es-es': "Rayo Psi",
				'it-it': "Psico",
				'pt-br': "Raio Psíquico",
				'de-de': "Mentale Blockade"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Miraculous Spin",
				'fr-fr': "Tournoiement Miraculeux",
				'es-es': "Giro Milagroso",
				'it-it': "Trottola Miracolosa",
				'pt-br': "Giro Milagroso",
				'de-de': "Wunderkreisel"
			},
			effect: {
				'en-us': "This attack does 40 damage for each Steven’s Resolve card in your discard pile.",
				'fr-fr': "Cette attaque inflige 40 dégâts pour chaque carte Résolution de Pierre dans votre pile de défausse.",
				'es-es': "Este ataque hace 40 puntos de daño por cada carta de Decisión de Máximo en tu pila de descartes.",
				'it-it': "Questo attacco infligge 40 danni per ogni carta Grinta di Rocco nella tua pila degli scarti.",
				'pt-br': "Este ataque causa 40 pontos de dano para cada carta Resolução do Steven na sua pilha de descarte.",
				'de-de': "Diese Attacke fügt 40 Schadenspunkte mal der Anzahl der Troys Entschluss-Karten in deinem Ablagestapel zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said that it originates from clay dolls made by an ancient civilization.",
	},

	thirdParty: {
		cardmarket: 361324,
		tcgplayer: 170901
	}
}

export default card

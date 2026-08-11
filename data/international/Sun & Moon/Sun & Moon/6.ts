import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'es-es': "Pinsir",
		'it-it': "Pinsir",
		'pt-br': "Pinsir",
		'de-de': "Pinsir"
	},

	illustrator: "DemizuPosuka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Roof Fling",
				'fr-fr': "Lance Auvent",
				'es-es': "Lanzar al Techo",
				'it-it': "Sfondatetto",
				'pt-br': "Arremesso ao Teto",
				'de-de': "Dachschleuder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put your opponent’s Active Pokémon and all cards attached to it into your opponent’s hand.",
				'fr-fr': "Lancez une pièce. Si c’est face, placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, pon el Pokémon Activo de tu rival y todas las cartas unidas a él en la mano de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, prendi il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate e aggiungili alle carte che ha in mano il tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, coloque o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele na mão do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf das Aktive Pokémon deines Gegners und alle an es angelegten Karten auf seine Hand."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Guillotine",
				'fr-fr': "Guillotine",
				'es-es': "Guillotina",
				'it-it': "Ghigliottina",
				'pt-br': "Guilhotina",
				'de-de': "Guillotine"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "One solid blow from its horns is enough to split apart a large tree. Its greatest rival in Alola is Vikavolt.",
	},

	thirdParty: {
		cardmarket: 295311,
		tcgplayer: 126877
	}
}

export default card

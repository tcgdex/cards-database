import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Omanyte",
		'fr-fr': "Amonita",
		'es-es': "Omanyte",
		'it-it': "Omanyte",
		'pt-br': "Omanyte",
		'de-de': "Amonitas"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tickle",
				'fr-fr': "Chatouille",
				'es-es': "Cosquillas",
				'it-it': "Solletico",
				'pt-br': "Cócegas",
				'de-de': "Spaßkanone"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

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
		'en-us': "Omanyte lived in the seas of antiquity. Its fossils have been found bearing bite marks from Archeops, so apparently Archeops preyed on it.",
	},

	thirdParty: {
		cardmarket: 369005,
		tcgplayer: 183853
	}
}

export default card

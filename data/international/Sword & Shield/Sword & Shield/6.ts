import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cotton Ride",
				'fr-fr': "Chevauchée Cotonneuse",
				'es-es': "Viaje Algodón",
				'it-it': "Cavalca Cotone",
				'pt-br': "Passeio de Algodão",
				'de-de': "Baumwollritt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all attached cards into their deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire mélange avec son deck son Pokémon Actif et toutes les cartes attachées.",
				'es-es': "Lanza 1 moneda. Si sale cara, tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja y las baraja todas.",
				'it-it': "Lancia una moneta. Se esce testa, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
				'pt-br': "Jogue 1 moeda. Se sair cara, seu oponente embaralhará o Pokémon Ativo dele(a) e todas as cartas ligadas a ele no próprio baralho.",
				'de-de': "Wirf 1 Münze. Bei Kopf mischt dein Gegner sein Aktives Pokémon und alle angelegten Karten in sein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leaf Step",
				'fr-fr': "Enjambée de Feuillage",
				'es-es': "Paso Hoja",
				'it-it': "Passofoglia",
				'pt-br': "Passo de Folha",
				'de-de': "Blattschritt"
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

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It scatters cotton all over the place as a prank. If it gets wet, it'll become too heavy to move and have no choice but to answer for its mischief."
	},

	thirdParty: {
		cardmarket: 436209,
		tcgplayer: 208272
	}
}

export default card

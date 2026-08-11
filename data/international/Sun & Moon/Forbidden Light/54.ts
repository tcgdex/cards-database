import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Hoopa",
		'fr-fr': "Hoopa",
		'es-es': "Hoopa",
		'it-it': "Hoopa",
		'pt-br': "Hoopa",
		'de-de': "Hoopa"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hyperspace Ring",
				'fr-fr': "Anneau Hyperespace",
				'es-es': "Anillo Dimensional",
				'it-it': "Anellodimensionale",
				'pt-br': "Anel de Hiperespaço",
				'de-de': "Dimensionsring"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Objeto, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Strumento, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas de Item no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Itemkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
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
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It gathers things it likes and passes them through its loop to teleport them to a secret place.",
	},

	thirdParty: {
		cardmarket: 355573,
		tcgplayer: 165704
	}
}

export default card

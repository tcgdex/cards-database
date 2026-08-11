import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'es-es': "Caterpie",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'de-de': "Raupy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		10,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "String Shot",
				'fr-fr': "Sécrétion",
				'es-es': "Disparo Demora",
				'it-it': "Millebave",
				'pt-br': "Estilingada",
				'de-de': "Fadenschuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is covered with a green skin. When it grows, it sheds the skin, covers itself with silk, and becomes a cocoon.",
	},

	thirdParty: {
		cardmarket: 293360,
		tcgplayer: 124016
	}
}

export default card

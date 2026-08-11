import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
		'es-es': "Clauncher",
		'it-it': "Clauncher",
		'pt-br': "Clauncher",
		'de-de': "Scampisto"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		692,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Bubble",
				'fr-fr': "Écume",
				'es-es': "Burbuja",
				'it-it': "Bolla",
				'pt-br': "Bolha",
				'de-de': "Blubber"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-Masse",
				'es-es': "Martillazo",
				'it-it': "Martellata",
				'pt-br': "Martelo Caranguejo",
				'de-de': "Krabbhammer"
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
		'en-us': "They knock down flying prey by firing compressed water from their massive claws like shooting a pistol.",
	},

	thirdParty: {
		cardmarket: 281687,
		tcgplayer: 92198
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Tyrunt",
		'fr-fr': "Ptyranidur",
		'es-es': "Tyrunt",
		'it-it': "Tyrunt",
		'pt-br': "Tyrunt",
		'de-de': "Balgoras"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		696,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
				'es-es': "Triturar",
				'it-it': "Sgranocchio",
				'pt-br': "Mastigada",
				'de-de': "Knirscher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	evolveFrom: {
		'en-us': "Jaw Fossil",
		'fr-fr': "Fossile Mâchoire",
		'es-es': "Fósil Mandíbula",
		'it-it': "Fossilmascella",
		'pt-br': "Fóssil de Mandíbula",
		'de-de': "Kieferfossil"
	},

	description: {
		'en-us': "This Pokémon was restored from a fossil. If something happens that it doesn't like, it throws a tantrum and runs wild.",
	},

	thirdParty: {
		cardmarket: 281725,
		tcgplayer: 92238
	}
}

export default card

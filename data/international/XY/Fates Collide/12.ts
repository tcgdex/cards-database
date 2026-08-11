import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
		'es-es': "Braixen",
		'it-it': "Braixen",
		'pt-br': "Braixen",
		'de-de': "Rutena"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		654,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Fennekin",
		'fr-fr': "Feunnec",
		'es-es': "Fennekin",
		'it-it': "Fennekin",
		'pt-br': "Fennekin",
		'de-de': "Fynx"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Destructive Flame",
				'fr-fr': "Flamme Destructrice",
				'es-es': "Llama Destructiva",
				'it-it': "Devastofiamma",
				'pt-br': "Chama Destruidora",
				'de-de': "Verzehrende Flamme"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sala cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crackling Ribbon",
				'fr-fr': "Ruban Crépitant",
				'es-es': "Cinta Chispeante",
				'it-it': "Lingua di fuoco",
				'pt-br': "Fita de Fogo Crepitante",
				'de-de': "Knisterndes Band"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When the twig is plucked from its tail, friction sets the twig alight. The flame is used to send signals to its allies.",
	},

	thirdParty: {
		cardmarket: 289838,
		tcgplayer: 117775
	}
}

export default card

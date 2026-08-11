import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Avalugg",
		'fr-fr': "Séracrawl",
		'es-es': "Avalugg",
		'it-it': "Avalugg",
		'pt-br': "Avalugg",
		'de-de': "Arktilas"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		713,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Bergmite",
		'fr-fr': "Grelaçon",
		'es-es': "Bergmite",
		'it-it': "Bergmite",
		'pt-br': "Bergmite",
		'de-de': "Arktip"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
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
				'es-es': "Lanza 1 moneda. Si sala cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Melting Floe",
				'fr-fr': "Banquise Fondante",
				'es-es': "Témpano Deshelante",
				'it-it': "Scioglibanchina",
				'pt-br': "Derretendo Banquisa",
				'de-de': "Schmelzende Scholle"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck. For each Water Energy card you discarded in this way, discard the top 3 cards of your opponent's deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck. Pour chaque carte Énergie Water défaussée de cette façon, défaussez les 3 cartes du dessus du deck de votre adversaire.",
				'es-es': "Descarta las 3 primeras cartas de tu baraja. Por cada carta de Energía Water descartada de esta manera, descarta las 3 primeras cartas de la baraja de tu rival.",
				'it-it': "Scarta le prime tre carte del tuo mazzo. Per ogni carta Energia Water scartata in questo modo, scarta le prime tre carte del mazzo del tuo avversario.",
				'pt-br': "Descarte 3 cards de cima do seu baralho. Para cada card de Energia Water descartado desta forma, descarte os 3 cards de cima do baralho do seu oponente.",
				'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Lege für jede Water-Energie, die du auf diese Weise auf deinen Ablagestapel gelegt hast, die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The way several Bergmite huddle on its back make it look like an aircraft carrier made of ice.",
	},

	thirdParty: {
		cardmarket: 291570,
		tcgplayer: 121126
	}
}

export default card

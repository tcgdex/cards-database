import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'es-es': "Lopunny",
		'it-it': "Lopunny",
		'pt-br': "Lopunny",
		'de-de': "Schlapor"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		428,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stompy Stomp",
				'fr-fr': "Pied-Piétine",
				'es-es': "Pisotonazo",
				'it-it': "Pesto Ripesto",
				'pt-br': "Pisada",
				'de-de': "Hopphopphurra"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Happy Turn",
				'fr-fr': "Tour de Chance",
				'es-es': "Giro Feliz",
				'it-it': "Svolta Fortunata",
				'pt-br': "Vez Feliz",
				'de-de': "Willkommene Wende"
			},
			effect: {
				'en-us': "You may shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				'es-es': "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				'it-it': "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Du kannst dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The ears appear to be delicate. If they are touched roughly, it kicks with its graceful legs.",
	},

	thirdParty: {
		cardmarket: 316033,
		tcgplayer: 157724
	}
}

export default card

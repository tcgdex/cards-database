import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [560],
	set: Set,

	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'de-de': "Irokex",
		'es-es': "Scrafty",
		'it-it': "Scrafty",
		'pt-br': "Scrafty"
	},

	illustrator: "OKUBO",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'de-de': "Zurrokex",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'es-es': "Scraggy",
		'es-mx': "Scraggy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Nab 'n' Dash",
			'fr-fr': "Vol et Ruée",
			'de-de': "Schnappen und Sprinten",
			'es-es': "Birlar y Pirarse",
			'it-it': "Arraffa e Scappa",
			'pt-br': "Pegar e Vazar"
		},

		effect: {
			'en-us': "Search your deck for a number of cards up to the number of your Benched Pokémon and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un nombre de cartes inférieur ou égal au nombre de Pokémon sur votre Banc, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu so vielen Karten, wie du Pokémon auf deiner Bank hast, und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja una cantidad de cartas igual o inferior al número de Pokémon que tengas en Banca y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un numero di carte uguale o inferiore al numero di Pokémon nella tua panchina e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por um número de cartas no seu baralho até o número dos seus Pokémon no Banco e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "High Jump Kick",
			'fr-fr': "Pied Voltige",
			'de-de': "Turmkick",
			'es-es': "Patada Salto Alta",
			'it-it': "Calcinvolo",
			'pt-br': "Chute de Pulo Alto"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 817779,
				tcgplayer: 627725
			},
		}
	],
}

export default card

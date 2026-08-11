import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'es-es': "Golduck",
		'it-it': "Golduck",
		'pt-br': "Golduck",
		'de-de': "Entoron"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Derail",
				'fr-fr': "Déraillement",
				'es-es': "Descarrilar",
				'it-it': "Deragliamento",
				'pt-br': "Descarrilar",
				'de-de': "Entgleisen"
			},
			effect: {
				'en-us': "Discard a Special Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia Especial ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Splash",
				'fr-fr': "Hydro-Éclaboussure",
				'es-es': "Hidroestallido",
				'it-it': "Idrosplash",
				'pt-br': "Hidro Borrifada",
				'de-de': "Hydroplatscher"
			},

			damage: 70,

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
		'en-us': "The forelegs are webbed, helping to make it an adept swimmer. It can be seen swimming elegantly in lakes, etc.",
	},

	thirdParty: {
		cardmarket: 288192,
		tcgplayer: 111520
	}
}

export default card

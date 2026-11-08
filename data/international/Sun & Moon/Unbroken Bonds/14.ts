import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'es-es': "Weepinbell",
		'it-it': "Weepinbell",
		'pt-br': "Weepinbell",
		'de-de': "Ultrigaria"
	},

	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		70,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bellsprout",
		'fr-fr': "Chétiflor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Burning Venom",
				'fr-fr': "Venin Brûlant",
				'es-es': "Veneno Abrasador",
				'it-it': "Tossina Ardente",
				'pt-br': "Veneno Abrasador",
				'de-de': "Brennendes Gift"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado y Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado e Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything.",
	},

	thirdParty: {
		cardmarket: 372307,
		tcgplayer: 189054
	}
}

export default card

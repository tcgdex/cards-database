import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
		'es-es': "Treecko",
		'it-it': "Treecko",
		'pt-br': "Treecko",
		'de-de': "Geckarbor"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		252,
	],

	hp: 50,

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
				'en-us': "Sleep Poison",
				'fr-fr': "Poison Dodo",
				'es-es': "Veneno Somnífero",
				'it-it': "Sonnoveleno",
				'pt-br': "Veneno Sonífero",
				'de-de': "Schlafgift"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
			},

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
		'en-us': "Small hooks on the bottom of its feet catch on walls and ceilings. That is how it can hang from above.",
	},

	thirdParty: {
		cardmarket: 361254,
		tcgplayer: 170813
	}
}

export default card

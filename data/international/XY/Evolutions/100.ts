import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "M Venusaur EX",
		'fr-fr': "M-Florizarre EX",
		'es-es': "M Venusaur EX",
		'it-it': "M Venusaur EX",
		'pt-br': "M Venusaur EX",
		'de-de': "M-Bisaflor EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 230,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Venusaur-EX",
		'fr-fr': "Florizarre-EX",
		'es-es': "Venusaur-EX",
		'it-it': "Venusaur-EX",
		'pt-br': "Venusaur-EX",
		'de-de': "Bisaflor-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Crisis Vine",
				'fr-fr': "Crise-Lianes",
				'es-es': "Crisis Liana",
				'it-it': "Emergitralcio",
				'pt-br': "Crise de Vinha",
				'de-de': "Krisenranke"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Paralizado y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Paralisado e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 124113
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'es-es': "Golduck",
		'it-it': "Golduck",
		'pt-br': "Golduck",
		'de-de': "Entoron"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Kyoko Umemoto",

	attacks: [{
		name: {
			'en-us': "Psybeam",
			'fr-fr': "Rafale Psy",
			'es-es': "Psicorrayo",
			'it-it': "Psicoraggio",
			'pt-br': "Psybeam",
			'de-de': "Psystrahl"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Your opponent's Active Pokémon is now Confused.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'pt-br': "Surf",
			'de-de': "Surfer"
		},

		damage: 70,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	description: {
		'en-us': "A professional swimmer, it can continue swimming for two days straight by waving its long tail skillfully."
	},

	dexId: [55],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574049,
				tcgplayer: 246818
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574049,
				tcgplayer: 246818
			}
		},
	],
}

export default card

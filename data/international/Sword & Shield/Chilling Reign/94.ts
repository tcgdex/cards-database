import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [109],
	set: Set,

	name: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Smog",
			'fr-fr': "Purédpois",
			'es-es': "Polución",
			'it-it': "Smog",
			'pt-br': "Nevoeiro de Fumaça",
			'de-de': "Smog"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It adores polluted air. Some claim that Koffing used to be more plentiful in the Galar region than they are now."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567202,
				tcgplayer: 241763
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567202,
				tcgplayer: 241763
			}
		},
	],
}

export default card

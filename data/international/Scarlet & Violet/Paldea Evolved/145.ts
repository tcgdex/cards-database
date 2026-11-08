import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [944],
	set: Set,

	name: {
		'fr-fr': "Gribouraigne",
		'en-us': "Shroodle",
		'es-es': "Shroodle",
		'it-it': "Shroodle",
		'pt-br': "Shroodle",
		'de-de': "Sproxi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Crache-Venin",
			'en-us': "Spit Poison",
			'es-es': "Escupir Veneno",
			'it-it': "Sputaveleno",
			'pt-br': "Cuspe Venenoso",
			'de-de': "Giftspucke"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715620,
				tcgplayer: 497660,
				cardtrader: 248776
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715620,
				tcgplayer: 497660,
				cardtrader: 248776
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	description: {
		'en-us': "Though usually a mellow Pokémon, it will sink its sharp, poison-soaked front teeth into any that anger it, causing paralysis in the object of its ire.",
	},
}

export default card

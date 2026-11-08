import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [543],
	set: Set,

	name: {
		'en-us': "Venipede",
		'fr-fr': "Venipatte",
		'es-es': "Venipede",
		'it-it': "Venipede",
		'pt-br': "Venipede",
		'de-de': "Toxiped"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Poison Sting",
			'fr-fr': "Dard-Venin",
			'es-es': "Picotazo Veneno",
			'it-it': "Velenospina",
			'pt-br': "Ferrão Venenoso",
			'de-de': "Giftstachel"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Its bite injects a potent poison, enough to paralyze large bird Pokémon that try to prey on it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567213,
				tcgplayer: 241780
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567213,
				tcgplayer: 241780
			}
		},
	],
}

export default card

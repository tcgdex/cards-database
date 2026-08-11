import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [747],
	set: Set,

	name: {
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
		'es-es': "Mareanie",
		'it-it': "Mareanie",
		'pt-br': "Mareanie",
		'de-de': "Garstella"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

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
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The first symptom of its sting is numbness. The next is an itching sensation so intense that it's impossible to resist the urge to claw at your skin.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682161,
				tcgplayer: 451768
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682161,
				tcgplayer: 451768
			}
		},
	],
}

export default card

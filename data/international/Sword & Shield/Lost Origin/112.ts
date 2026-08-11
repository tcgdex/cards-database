import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [167],
	set: Set,

	name: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
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
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674125,
				tcgplayer: 284007
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674125,
				tcgplayer: 284007
			}
		},
	],
}

export default card

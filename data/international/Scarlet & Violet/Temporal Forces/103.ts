import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [93],
	set: Set,

	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Super Poison Breath",
			'fr-fr': "Super Haleine Empoisonnée",
			'es-es': "Aliento Supervenenoso",
			'it-it': "Super Velenospiro",
			'pt-br': "Super-hálito Venenoso",
			'de-de': "Super-Gifthauch"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760733,
				tcgplayer: 542847
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760733,
				tcgplayer: 542847
			}
		},
	],

	illustrator: "MAHOU",

}

export default card
import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [316],
	set: Set,

	name: {
		'en-us': "Gulpin",
		'fr-fr': "Gloupti",
		'es-es': "Gulpin",
		'it-it': "Gulpin",
		'pt-br': "Gulpin",
		'de-de': "Schluppuck"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Drool",
			'fr-fr': "Gluant",
			'es-es': "Babeo",
			'it-it': "Sbavare",
			'pt-br': "Babar",
			'de-de': "Sabbern"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

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
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 786008,
				tcgplayer: 567439
			}
		},
	],

	illustrator: "Jerky",

}

export default card

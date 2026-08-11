import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [569],
	set: Set,

	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		'en-us': "The toxic liquid it launches from its right arm is so virulent that it can kill a weakened creature instantly."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Poison Gas",
			'fr-fr': "Gaz Toxik",
			'de-de': "Giftwolke",
			'es-es': "Gas Venenoso",
			'pt-br': "Gás Venenoso",
			'it-it': "Velenogas"
		},

		damage: 30,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Sludge Whirlpool",
			'fr-fr': "Tourbillon de Boue",
			'de-de': "Schlammstrudel",
			'es-es': "Torbellino de Residuos",
			'pt-br': "Redemoinho de Lodo",
			'it-it': "Fangovortice"
		},

		damage: 130
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582797,
				tcgplayer: 253383
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582797,
				tcgplayer: 253383
			}
		},
	],
}

export default card

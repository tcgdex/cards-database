import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [29],
	set: Set,

	name: {
		'fr-fr': "Nidoran♀",
		'en-us': "Nidoran♀",
		'es-es': "Nidoran♀",
		'it-it': "Nidoran♀",
		'pt-br': "Nidoran♀",
		'de-de': "Nidoran♀"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Corne Empoisonnée",
			'en-us': "Poison Horn",
			'es-es': "Cuerno Veneno",
			'it-it': "Velencorno",
			'pt-br': "Chifre Venenoso",
			'de-de': "Gifthorn"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It uses its hard incisor teeth to crush and eat berries. The tip of a female Nidoran's horn is a bit more rounded than the tip of a male's horn.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733624,
				tcgplayer: 515994,
				cardtrader: 261134
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733624,
				tcgplayer: 515994,
				cardtrader: 261134
			}
		},
	],

	illustrator: "Teeziro",

	
}

export default card

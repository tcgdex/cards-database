import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [322],
	set: Set,

	name: {
		'fr-fr': "Chamallot",
		'en-us': "Numel",
		'es-es': "Numel",
		'it-it': "Numel",
		'pt-br': "Numel",
		'de-de': "Camaub"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Magma Ardent",
			'en-us': "Hot Magma",
			'es-es': "Magma Caliente",
			'it-it': "Magma Bollente",
			'pt-br': "Magma Cálido",
			'de-de': "Heißes Magma"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Magma of almost 2,200 degrees Fahrenheit courses through its body. When it grows cold, the magma hardens and slows it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725111,
				tcgplayer: 509726,
				cardtrader: 255591
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725111,
				tcgplayer: 509726,
				cardtrader: 255591
			}
		},
	],

	illustrator: "Mizue",

	
}

export default card

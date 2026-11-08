import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		'fr-fr': "Axoloto de Paldea",
		'en-us': "Paldean Wooper",
		'es-es': "Wooper de Paldea",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'de-de': "Paldea-Felino"
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

	description: {
		'en-us': "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725206,
				tcgplayer: 509880,
				cardtrader: 255811
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725206,
				tcgplayer: 509880,
				cardtrader: 255811
			}
		},
	],

	illustrator: "Shibuzoh.",

	
}

export default card

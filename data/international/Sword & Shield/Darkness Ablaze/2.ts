import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Butterfree VMAX",
		'fr-fr': "Papilusion VMAX",
		'es-es': "Butterfree VMAX",
		'it-it': "Butterfree VMAX",
		'pt-br': "Butterfree VMAX",
		'de-de': "Smettbo VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [12],
	set: Set,
	hp: 300,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Butterfree V",
		'fr-fr': "Papilusion-V",
		'es-es': "Butterfree V",
		'it-it': "Butterfree-V",
		'pt-br': "Butterfree V",
		'de-de': "Smettbo-V"
	},

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "G-Max Toxbreeze",
				'fr-fr': "Toxibrise G-Max",
				'es-es': "Gigabrisa Tóxica",
				'it-it': "Gigabrezza Tossica",
				'pt-br': "Brisa Tóxica G-Max",
				'de-de': "Giga-Giftbrise"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 482884,
				tcgplayer: 219055
			}
		},
	],
}

export default card

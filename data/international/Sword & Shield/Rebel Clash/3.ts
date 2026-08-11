import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [12],

	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'es-es': "Butterfree",
		'it-it': "Butterfree",
		'pt-br': "Butterfree",
		'de-de': "Smettbo"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'de-de': "Safcon"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Panic Poison",
				'fr-fr': "Poison Panique",
				'es-es': "Pánico Venenoso",
				'it-it': "Velenostress",
				'pt-br': "Veneno do Pânico",
				'de-de': "Panikgift"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cutting Wind",
				'fr-fr': "Vent Glacial",
				'es-es': "Viento Helado",
				'it-it': "Vento Tagliente",
				'pt-br': "Vento Dilacerante",
				'de-de': "Schneidender Wind"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 140,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "In battle, it flaps its wings at great speed to release highly toxic dust into the air."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457393,
				tcgplayer: 213073
			}
		},
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 213073
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457393,
				tcgplayer: 213073
			}
		},
	],
}

export default card

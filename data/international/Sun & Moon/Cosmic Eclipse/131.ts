import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Alolan Muk",
		'fr-fr': "Grotadmorv d’Alola",
		'es-es': "Muk de Alola",
		'it-it': "Muk di Alola",
		'pt-br': "Muk de Alola",
		'de-de': "Alola-Sleimok"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorv d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
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
				'en-us': "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Bomb",
				'fr-fr': "Bomb-Beurk",
				'es-es': "Bomba Lodo",
				'it-it': "Fangobomba",
				'pt-br': "Bomba de Lodo",
				'de-de': "Matschbombe"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "There are over a hundred kinds of poison inside its body. Chemical reactions between different poisons are the source of its vitality.",
	},

	thirdParty: {
		cardmarket: 408304,
		tcgplayer: 201174
	}
}

export default card

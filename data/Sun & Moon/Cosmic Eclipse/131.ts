import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Muk",
		fr: "Grotadmorv d’Alola",
		es: "Muk de Alola",
		it: "Muk di Alola",
		pt: "Muk de Alola",
		de: "Alola-Sleimok"
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
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Panic Poison",
				fr: "Poison Panique",
				es: "Pánico Venenoso",
				it: "Velenostress",
				pt: "Veneno do Pânico",
				de: "Panikgift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
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
				en: "Sludge Bomb",
				fr: "Bomb-Beurk",
				es: "Bomba Lodo",
				it: "Fangobomba",
				pt: "Bomba de Lodo",
				de: "Matschbombe"
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

	thirdParty: {
		cardmarket: 408304,
		tcgplayer: 201174
	}
}

export default card

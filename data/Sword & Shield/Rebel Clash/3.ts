import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
		es: "Butterfree",
		it: "Butterfree",
		pt: "Butterfree",
		de: "Smettbo"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier"
	},

	attacks: [
		{
			cost: [
				"Grass",
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
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent Glacial",
				es: "Viento Helado",
				it: "Vento Tagliente",
				pt: "Vento Dilacerante",
				de: "Schneidender Wind"
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

	variants: {
		normal: true,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "In battle, it flaps its wings at great speed to release highly toxic dust into the air."
	}
}

export default card

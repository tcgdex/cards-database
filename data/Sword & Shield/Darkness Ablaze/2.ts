import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Butterfree VMAX",
		fr: "Papilusion VMAX",
		es: "Butterfree VMAX",
		it: "Butterfree VMAX",
		pt: "Butterfree VMAX",
		de: "Smettbo VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 300,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Butterfree V",
		fr: "Papilusion-V"
	},

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "G-Max Toxbreeze",
				fr: "Toxibrise G-Max",
				es: "Gigabrisa Tóxica",
				it: "Gigabrezza Tossica",
				pt: "Brisa Tóxica G-Max",
				de: "Giga-Giftbrise"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
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
	retreat: 0
}

export default card

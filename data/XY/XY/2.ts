import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "M Venusaur EX",
		fr: "M Florizarre EX",
		es: "M Venusaur EX",
		it: "M Venusaur EX",
		pt: "M Venusaur EX",
		de: "M-Bisaflor EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 230,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Venusaur-EX",
		fr: "Florizarre-EX",
		es: "Venusaur-EX",
		it: "Venusaur-EX",
		pt: "Venusaur-EX",
		de: "Bisaflor-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Crisis Vine",
				fr: "Crise-Lianes",
				es: "Crisis Liana",
				it: "Emergitralcio",
				pt: "Crise de Vinha",
				de: "Krisenranke"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Paralizado y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Paralisado e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,
	suffix: "EX"
}

export default card

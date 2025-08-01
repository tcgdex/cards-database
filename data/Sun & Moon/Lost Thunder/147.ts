import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Morelull",
		fr: "Spododo",
		es: "Morelull",
		it: "Morelull",
		pt: "Morelull",
		de: "Bubungus"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		755,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Perplex",
				fr: "Affolement",
				es: "Desconcierto",
				it: "Sconcerto",
				pt: "Perplexo",
				de: "Perplex"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365784
	}
}

export default card

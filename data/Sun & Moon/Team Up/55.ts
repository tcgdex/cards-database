import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Nidorina",
		fr: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		pt: "Nidorina",
		de: "Nidorina"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		30,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Family Rescue",
				fr: "Sauvetage Familial",
				es: "Rescate Familiar",
				it: "Salva Famiglia",
				pt: "Resgatar a Família",
				de: "Familienrettung"
			},
			effect: {
				en: "Shuffle 5 Psychic Pokémon from your discard pile into your deck.",
				fr: "Mélangez 5 Pokémon Psychic de votre pile de défausse avec votre deck.",
				es: "Pon 5 Pokémon Psychic de tu pila de descartes en tu baraja y baraja todas las cartas.",
				it: "Rimischia cinque Pokémon Psychic dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe 5 Pokémon Psychic da sua pilha de descarte no seu baralho.",
				de: "Mische 5 Psychic-Pokémon aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 368985
	}
}

export default card

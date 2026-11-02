import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		568,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pile Up",
				fr: "Amoncellement",
				de: "Eindecken"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez une carte Outil Pokémon dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				de: "Wirf 1 Münze. Durchsuche bei „Kopf“ dein Deck nach 1 Pokémon-Ausrüstung, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Toss",
				fr: "Giclée Vaseuse",
				de: "Schleimwurf"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The combination of garbage bags and industrial waste caused the chemical reaction that created this Pokémon.",
		de: "Eine Mülltüte, der Industrieabfälle und chemische Reaktionen neues Leben eingehaucht haben."
	},

	thirdParty: {
		cardmarket: 280803,
		tcgplayer: 90067
	}
}

export default card

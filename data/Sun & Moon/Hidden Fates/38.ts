import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
		de: "Piepi"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lead",
				fr: "Mentor",
				de: "Führen"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Lancez une pièce. Si c’est face, cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face",
				de: "Pfund"
			},

			damage: 10,

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

	description: {
		en: "They're popular, but they're rare. Trainers who show them off recklessly may be targeted by thieves.",
		de: "Dieses beliebte Pokémon hat Seltenheitswert. Wer leichtsinnig damit prahlt, eins zu haben, könnte in das Visier von Dieben geraten."
	},

	thirdParty: {
		cardmarket: 394597,
		tcgplayer: 197682
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		603,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
		de: "Zapplardin"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Wave",
				fr: "Cage-Éclair",
				de: "Donnerwelle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
				de: "Kopfnuss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It wraps itself around its prey and paralyzes it with electricity from the round spots on its sides. Then it chomps.",
		de: "Schlingt sich um Gegner, lähmt sie über die rund gemaserten Flächen an seinem Körper mit Strom und beißt beherzt zu."
	},

	thirdParty: {
		cardmarket: 281053,
		tcgplayer: 85069
	}
}

export default card

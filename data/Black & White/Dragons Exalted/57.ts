import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
		es: "Gothitelle",
		it: "Gothitelle",
		pt: "Gothitelle",
		de: "Morbitesse"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		576,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
		de: "Hypnomorba"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Doom Decree",
				fr: "Verdict Fatal",
				de: "Urteil"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Défenseur est mis K.O.",
				de: "Wirf 2 Münzen. Zeigen beide „Kopf“, wird das Verteidigende Pokémon kampfunfähig."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Black Magic",
				fr: "Magie Noire",
				de: "Schwarze Magie"
			},
			effect: {
				en: "Does 20 more damage for each of your opponent's Benched Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes Pokémon auf der Bank deines Gegners zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Starry skies thousands of light-years away are visible in the space distorted by their intense psychic power.",
		de: "Durch seine mächtigen Psycho-Kräfte krümmt sich der Raum und Bilder eines Lichtjahre entfernten Ortes erscheinen."
	},

	thirdParty: {
		cardmarket: 280496,
		tcgplayer: 85853
	}
}

export default card

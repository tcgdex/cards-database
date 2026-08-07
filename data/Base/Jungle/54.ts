import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		de: "Pummeluff",
		it: "Jigglypuff"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lullaby",
				fr: "Comptine",
				de: "Wiegenlied",
				it: "Ninna nanna"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "das verteidigende Pokémon ist jetzt gelähmt.",
				it: "Il Pokémon Difensore è Addormentato."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'face",
				de: "Pfund",
				it: "Libbra"
			},

			damage: 20,

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
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
		fr: "Quand ses yeux s'illuminent, il chante une mystérieuse berceuse.",
		it: "Quando i suoi enormi occhi si illuminano, canta una misteriosa ninna nanna che \"addormenta\" i suoi nemici."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273851,
				tcgplayer: 45157
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273851,
				tcgplayer: 45157
			}
		}
	],
}

export default card

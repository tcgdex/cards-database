import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		it: "Jigglypuff",
		de: "Pummeluff"
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
				it: "Ninna nanna",
				de: "Wiegenlied"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				it: "Il Pokémon Difensore è Addormentato.",
				de: "Das verteidigende Pokémon ist jetzt schlafend."
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
				it: "Libbra",
				de: "Pfund"
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
		it: "Quando i suoi enormi occhi si illuminano, canta una misteriosa ninna nanna che \"addormenta\" i suoi nemici.",
		de: "Wenn seine riesigen Augen aufleuchten, singt es eine gewaltige Melodei, die seine Feinde auf eine geheimnisvolle sanfte Weise in den Schlaf versetzt."
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

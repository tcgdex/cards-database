import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shuppet",
		fr: "Polychombr",
		de: "Shuppet"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [353],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Hypnotic Gaze",
				fr: "Regard hypnotique",
				de: "Hypnotischer Blick"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fade Out",
				fr: "Faiblir",
				de: "Ausblenden"
			},
			effect: {
				en: "Return Shuppet and all cards attached to it to your hand. (If you don't have any Benched Pokémon, this attack does nothing.)",
				fr: "Reprenez dans votre main Polychombr ainsi que toutes les cartes qui lui sont attachées. (Si vous ne possédez pas de Pokémon de Banc, cette attaque est sans effet.)",
				de: "Nimm Shuppet und alle daran angelegten Karten zurück auf die Hand. (Dieser Angriff hat keine Auswirkungen, wenn du keine Pokémon auf deiner Bank hast.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It loves vengeful emotions and hangs in rows under the eaves of houses where vengeful people live.",
		de: "Es liebt Rachegefühle. Diese PKMN hängen sich an Dachrinnen von Häusern, in denen Rachsüchtige leben."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89201,
				cardmarket: 278513
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278513,
				tcgplayer: 89201
			}
		}
	],

}

export default card

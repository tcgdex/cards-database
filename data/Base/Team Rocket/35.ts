import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Flareon",
		fr: "Pyroli obscur",
		de: "Dunkles Flamara"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 50,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Rage",
				de: "Rage"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Dark Flareon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque compteur de dégâts sur Pyroli obscur.",
				de: "Does 10 damage plus 10 more damage for each damage counter on Dark Flareon."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Playing with Fire",
				fr: "Jouer avec le feu",
				de: "Playing with Fire"
			},
			effect: {
				en: "Use this attack only if there are any Energy cards attached to Dark Flareon. Flip a coin. If heads, discard 1 of those Energy cards and this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage.",
				fr: "N'utilisez cette attaque que si des cartes Énergie  sont attachées à Pyroli obscur. Lancez une pièce. Si c'est face, défaussez une de ces cartes Énergie et cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 30 dégâts.",
				de: "Use this attack only if there are any  Energy cards attached to Dark Flareon. Flip a coin. If heads, dicard 1 of those Energy cards and this attack does 30 damage plus 20 more damage; if tails, this attack does 30 damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "A Pokémon with a hot temper that can't be controlled once it's angered. Capable of breathing flames hotter than 3000°.",
		fr: "Ce Pokémon a le sang chaud et devient incontrôlable lorsqu'il s'emporte. Il peut cracher des flammes de plus de 3000°."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274088,
				tcgplayer: 84597
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274088,
				tcgplayer: 84597
			}
		}
	]
}

export default card

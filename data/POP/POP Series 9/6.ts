import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Buizel",
		fr: "Buizel"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		418,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Whirlpool",
				fr: "Siphon"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Super Fast",
				fr: "« Super Rapide »"
			},
			effect: {
				en: "If you have Pachirisu in play, flip a coin. If heads, prevent all effects of an attack, including damage, done to Buizel during your opponent’s next turn.",
				fr: "Si vous avez un Pachirisu en jeu, lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Mustébouée lors du prochain tour de votre adversaire."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "It swims by rotating its two tails like a screw. When it dives, its flotation sac collapses."
	},

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 278557,
		tcgplayer: 84020
	}
}

export default card

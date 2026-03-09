import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Toxicroak G",
		fr: "Coatox ",
		de: "Toxiquak G"
	},

	illustrator: "Ryota Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Anticipation",
				fr: "Anticipation",
				de: "Anticipation"
			},
			effect: {
				en: "Prevent all effects of attacks, excluding damage, done to Toxicroak .",
				fr: "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Coatox .",
				de: "Prevent all effects of attacks, excluding damage, done to Toxicroak G."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Deep Poison",
				fr: "Poison profond",
				de: "Deep Poison"
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
				de: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 40 more damage."
			},
			damage: "20+",

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
		tcgplayer: 90012
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"]
		}
	]
}

export default card

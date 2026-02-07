import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Wormadam Sandy Cloak",
		fr: "Wormadam Sandy Cloak"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti Cape Sable"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sandy Cloak",
				fr: "Cape sable"
			},
			effect: {
				en: "Prevent all effects of attacks, excluding damage, done to Wormadam Sandy Cloak.",
				fr: "Prévenez tous les effets d'une attaque, dégâts exclus, infligés à Cheniselle Cape Sable par des Pokémon de votre adversaire."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Push Over",
				fr: "Facilité"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Fighting Energy attached to Wormadam Sandy Cloak.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Cheniselle Cape Sable."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		en: "When BURMY evolved, it cloak became a part of this Pokémon’s body. The cloak is never shed."
	},

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 278042,
		tcgplayer: 90643
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Wormadam Sandy Cloak",
		fr: "Wormadam Sandy Cloak",
		de: "Burmadame Sandumhang"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [413],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti Cape Sable",
		de: "Burmy"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sandy Cloak",
				fr: "Cape sable",
				de: "Sandumhang"
			},
			effect: {
				en: "Prevent all effects, excluding damage, done to Wormadam Sandy Cloak.",
				fr: "Prévenez tous les effets d'une attaque, dégâts exclus, infligés à Cheniselle Cape Sable par des Pokémon de votre adversaire.",
				de: "Verhindere alle Effekte von Angriffen, außer Schaden, die Wurmadame Sandumhang zugefügt würden."
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
				fr: "Facilité",
				de: "Umschubsen"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Fighting Energy attached to Wormadam Sandy Cloak.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Cheniselle Cape Sable.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Burmadame Sandumhang angelegte {F}-Energie zu."
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
		en: "When BURMY evolved, it cloak became a part of this Pokémon’s body. The cloak is never shed.",
		de: "Als sich BURMY entwickelte, wurde sein Umhang Teil des Körpers. Es legt den Umhang niemals ab."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90643,
				cardmarket: 278042
			},
		},
	],

}

export default card

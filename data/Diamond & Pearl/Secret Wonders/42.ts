import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Wormadam Sandy Cloak",
		fr: "Cheniselle Cape Sable",
		de: "Burmadame Sandumhang"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
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
		en: "Burmy Sandy Cloak",
		fr: "Cheniti Cape Sable",
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
				en: "Prevent all effects of attacks, excluding damage, done to Wormadam Sandy Cloak.",
				fr: "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Cheniselle Cape Sable.",
				de: "Verhindere alle Effekte von Angriffen, außer Schaden, die Wurmadame Sandumhang zugefügt werden."
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
				fr: "Prévenez tous les effets d’une attaque, dégâts exclus, infligés à Cheniselle Cape Sable par des Pokémon de votre adversaire.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Burmadame Sandumhang angelegte -Energie zu."
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
	retreat: 1,



}

export default card

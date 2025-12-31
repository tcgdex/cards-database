import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Wormadam Plant Cloak",
		fr: "Cheniselle Cape Plante",
		de: "Burmadame Pflanzenumhang"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Burmy Plant Cloak",
		fr: "Cheniti Cape Plante",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Plant Cloak",
				fr: "Cape Plante",
				de: "Pflanzenumhang"
			},
			effect: {
				en: "If Wormadam Plant Cloak has 2 or more Grass Energy attached to it, Wormadam Plant Cloak gets +40 HP.",
				fr: "Si Cheniselle Cape Plante possède au moins 2 Énergies Grass, il obtient 40 PV de plus.",
				de: "Solange an Burmadame Pflanzenumhang mindestens 2 -Energien angelegt sind, erhält es +40 KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Hurricane",
				fr: "Feuille ouragan",
				de: "Blätterhurrikan"
			},
			effect: {
				en: "If the Defending Pokémon has fewer remaining HP than Wormadam Plant Cloak, the Defending Pokémon is now Confused.",
				fr: "S'il reste au Pokémon Défenseur moins de PV qu'à Cheniselle Cape Plante, le Pokémon Défenseur est maintenant Confus.",
				de: "Wenn das Verteidigende Pokémon weniger verbliebene KP hat als Burmadame Pflanzenumhang, ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277794,
		tcgplayer: 90640
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Swalot",
		fr: "Avaltout",
		de: "Schlukwech"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gulpin",
		fr: "Gloupti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pick and Choose",
				fr: "Choisir",
				de: "Qual der Wahl"
			},
			effect: {
				en: "Choose either Burned or Poisoned, and either Asleep or Confused. The Defending Pokémon is now affected by both Special Conditions.",
				fr: "Choisissez entre Brûlé et Empoisonné ou Endormi et Confus. Le Pokémon Défenseur est maintenant affecté par ces deux États Spéciaux.",
				de: "Wähle entweder Verbrannt oder Vergiftet und entweder Schlafend oder Verwirrt. Das Verteidigende Pokémon ist jetzt von den beiden gewählten Speziellen Zuständen betroffen."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reactive Poison",
				fr: "Poison réactif",
				de: "Reaktives Gift"
			},
			effect: {
				en: "Does 50 damage plus 20 more damage for each Special Condition affecting the Defending Pokémon.",
				fr: "Inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Défenseur.",
				de: "Dieser Angriff fügt 50 Schadenspunkte plus 20 weitere Schadenspunkte für jeden Speziellen Zustand, von dem das Verteidigende Pokémon betroffen ist, zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277092,
		tcgplayer: 89672
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card

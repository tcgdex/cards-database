import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Manectric",
		fr: "Elecsprint de Team Aqua",
		de: "Team Aquas Voltenso"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [310],

	hp: 80,

	types: [
		"Lightning"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Aqua Beam",
				fr: "Aqua-laser",
				de: "Aquastrahl"
			},
			effect: {
				en: "If the Defending Pokémon has Team Magma in its name, the Defending Pokémon is now Confused.",
				fr: "Si le nom du Pokémon Défenseur comporte Team Magma, le Pokémon Défenseur est maintenant Confus.",
				de: "Wenn das Verteidigende Pokémon „Team Magma“ im Namen hat, ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chaos Crush",
				fr: "Écrasement chaotique",
				de: "Chaosbruch"
			},
			effect: {
				en: "If the Defending Pokémon is Confused, discard an Energy card attached to the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur est Confus, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wenn das Verteidigende Pokémon verwirrt ist, lege eine an das Verteidigende Pokémon angelegte Energiekarte auf den Ablagestapel."
			},
			damage: 50,

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
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275806,
				tcgplayer: 89791
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275806,
				tcgplayer: 89791
			}
		},
	],

}

export default card

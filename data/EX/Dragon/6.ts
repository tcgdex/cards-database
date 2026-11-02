import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
		de: "Groink"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [326],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
		de: "Spoink"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Boom",
				fr: "Psycho-boom",
				de: "Psychoknall"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				de: "Fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede am Verteidigenden Pokémon angelegte Energie zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Trip",
				fr: "Avoir l'esprit ailleurs",
				de: "Verstandesreise"
			},
			effect: {
				en: "If Grumpig and the Defending Pokémon have the same amount of Energy attached to them, the Defending Pokémon is now Confused.",
				fr: "Si Groret et le Pokémon Défenseur possèdent le même total en Énergie, le Pokémon Défenseur est maintenant Confus.",
				de: "Falls an Groink und dem Verteidigenden Pokémon gleich viel Energie angelegt ist, ist das Verteidigende jetzt verwirrt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85964,
				cardmarket: 275883
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85964,
				cardmarket: 275883
			},
		},
	],

}

export default card

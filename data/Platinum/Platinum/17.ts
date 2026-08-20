import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Weavile G",
		fr: "Dimoret G",
		de: "Snibunna G"
	},

	illustrator: "Makoto Imai",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [461],

	hp: 80,

	types: [
		"Darkness"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{

			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for up to 2 basic Pokémon SP and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base SP et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon SP-Karten und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Attack",
				fr: "Attaque de groupe",
				de: "Teamangriff"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Pokémon SP you have in play.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon SP que vous avez en jeu.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon SP, das du im Spiel hast, zu."
			},
			damage: "10+",

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
			type: "Psychic",
			value: "-20"
		},
	],

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 90536,
				cardmarket: 278438
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278438,
				tcgplayer: 90536
			}
		}
	],

	retreat: 0
}

export default card

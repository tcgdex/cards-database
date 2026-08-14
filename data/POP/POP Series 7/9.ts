import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Stantler",
		fr: "Stantler",
		de: "Damhirplex"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [234],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Lead",
				fr: "Avance",
				de: "Führen"
			},
			effect: {
				en: "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Supporter, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frighten Horn",
				fr: "Corne qui fait peur",
				de: "Angsthorn"
			},
			effect: {
				en: "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur n'est pas un Pokémon Évolué, il est maintenant Confus.",
				de: "Wenn das Verteidigende Pokémon kein entwickeltes Pokémon ist, ist es jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	description: {
		en: "Staring at its antlers creates an odd sensation as if one were being drawn into their centers.",
		de: "Starrt man auf sein Geweih, bekommt man das seltsame Gefühl, in dessen Mitte gezogen zu werden."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89505,
				cardmarket: 278041
			},
		},
		{
			type: "holo",
			foil: 'cosmos',
			thirdParty: {
				tcgplayer: 86467,
				cardmarket: 278041
			},
		},
	],

}

export default card

import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		504,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Patrol",
				fr: "Patrouille",
				de: "Streife"
			},
			effect: {
				en: "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
				fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
				de: "Schau dir die obersten 3 Karten deines Decks an und lege sie in beliebiger Reihenfolge zurück auf dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Extremely cautious, one of them will always be on the lookout, but it won't notice a foe coming from behind.",
		de: "Eines dieser vorsichtigen Pokémon steht immer vor ihrem Bau Wache. Nähert sich jedoch ein Feind von hinten, ist es aus."
	},

	thirdParty: {
		cardmarket: 280705,
		tcgplayer: 87964
	}
}

export default card

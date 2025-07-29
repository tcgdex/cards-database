import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Relicanth",
		fr: "Relicanth",
		de: "Relicanth"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Primal Calling",
				fr: "Appel primitif",
				de: "Urschrei"
			},
			effect: {
				en: "Search your deck for up to 3 Trainer cards that have Fossil in their names, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 3 cartes Dresseur dont le nom comporte Fossile, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 3 Trainerkarten mit Fossil im Namen, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleep Swirl",
				fr: "Tourbillon dodo",
				de: "Schlafwirbel"
			},
			effect: {
				en: "Both Relicanth and the Defending Pokémon are now Asleep.",
				fr: "Relicanth et le Pokémon Défenseur sont maintenant Endormis.",
				de: "Relicanth und das Verteidigende Pokémon schlafen jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277953
	}
}

export default card

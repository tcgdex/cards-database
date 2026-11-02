import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Ralts",
		fr: "Tarsal",
		de: "Trasla"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [280],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Future Sight",
				fr: "Prescience",
				de: "Seher"
			},
			effect: {
				en: "Look at the top 5 cards in either player's deck and put them back on top of that player's deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de chaque joueur et replacez-les au dessus du deck de chaque joueur dans n'importe quel ordre.",
				de: "Schau dir die obersten 5 Karten des Decks eines Spielers an und lege die Karten in beliebiger Reihenfolge auf das Deck dieses Spielers zurück."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf 1 Münze. Bei „Kopf“ schläft das Verteidigende Pokémon jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "If its horns capture the warm feelings of people or Pokémon, its body warms up slightly.",
		de: "Es erfasst warme Gefühle von Menschen und PKMN mit seinen Hörnern und wärmt sich daran auf."
	},

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88563,
				cardmarket: 278510
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278510,
				tcgplayer: 88563
			}
		},
		{
			type:"normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				tcgplayer: 480101
			}
		}
	],

}

export default card

import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus",
		fr: "Arceus",
		de: "Arceus"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		493,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Ripple Swell",
				fr: "Vague menaçante",
				de: "Wellenschwall"
			},
			effect: {
				en: "If you have 6 Arceus in play and each of them is a different type, search your deck for up to 6 basic Energy cards. Attach each of those Energy cards to a different Pokémon you have in play. Shuffle your deck afterward.",
				fr: "Si vous avez 6 Arceus en jeu et que chacun de ces Arceus est de type différent, choisissez jusqu'à 6 cartes Énergie de base dans votre deck. Attachez chacune de ces cartes Énergie à un autre Pokémon que vous avez en jeu. Ensuite, mélangez votre deck.",
				de: "Wenn du 6 Arceus jeweils unterschiedlichen Typs im Spiel hast, durchsuche dein Deck nach bis zu 6 Basis-Energiekarten. Lege jeder dieser Energiekarten an ein anderes deiner Pokémon im Spiel an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Spear",
				fr: "Lance céleste",
				de: "Himmelsspeer"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Remove all Energy cards attached to Arceus and put them in the Lost Zone.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Retirez à Arceus toutes ses cartes Énergie et placez-les dans la Zone Perdue.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Entferne alle Energiekarten, die an Arceus angelegt sind, und lege sie ins Nirgendwo."
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

	thirdParty: {
		cardmarket: 278861
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

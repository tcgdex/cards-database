import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Electromagnetic Induction",
				fr: "Démarrage électromagnétìque",
				de: "Elektromagnetische Induktion"
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Lightning et attachez-les à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 -Energiekarten und lege sie an 1 deiner Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Explosive Thunder",
				fr: "Tonnerre explosif",
				de: "Explosiver Donner"
			},
			effect: {
				en: "Discard all basic Lightning Energy cards attached to Raichu. This attack does 30 damage times the number of Lightning Energy cards you discarded.",
				fr: "Défaussez toutes les cartes Énergie Lightning attachées à Raichu. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie défaussées.",
				de: "Lege alle an Raichu angelegten -Basis-Energiekarten auf deinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der auf diese Weise auf den Ablagestapel gelegten -Energiekarten zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		fr: "Il devient agressif lorsque son corps contient trop d'électricité. Il la décharge par sa queue."
	}
}

export default card

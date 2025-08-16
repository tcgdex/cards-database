import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Furret",
		fr: "Fouinar",
		de: "Wiesenior"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		162,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Keen Eye",
				fr: "Regard vif",
				de: "Adlerauge"
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez jusqu'à 2 cartes dans votre deck et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Baton Pass",
				fr: "Relais",
				de: "Stafette"
			},
			effect: {
				en: "You may switch Furret with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Furret as you like to the new Active Pokémon.",
				fr: "Vous pouvez échanger Fouinar avec 1 des Pokémon de votre Banc. Déplacez alors autant de cartes Énergie attachées à Fouinar que vous voulez sur le nouveau Pokémon Actif.",
				de: "Du kannst Wiesenior gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, kannst du eine beliebige Anzahl an Wiesenior angelegter Energiekarten entfernen und an das neue Aktive Pokémon anlegen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277780,
		tcgplayer: 85593
	}
}

export default card

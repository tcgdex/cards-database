import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Gastrodon East Sea",
		fr: "Tritosor Mer Orient Niv. 40",
		de: "Gastrodon Östliches Meer"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		423,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Shellos East Sea",
		fr: "Sancoki Mer Orient",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sticky Hold",
				fr: "Glue",
				de: "Wertehalter"
			},
			effect: {
				en: "If Gastrodon East Sea is switched or retreats to your Bench, move as many Energy cards attached to Gastrodon East Sea as you like to the new Active Pokémon.",
				fr: "Si Tritosor Mer Orient est échangé ou bat en retraite, déplacez autant de cartes Énergie qui lui sont attachées que vous le voulez sur le nouveau Pokémon Actif.",
				de: "Wenn Gastrodon Östliches Meer auf die Bank zurückgezogen oder gegen ein Pokémon auf deiner Bank ausgetauscht wird, kannst du eine beliebige Anzahl an Gastrodon Östliches Meer angelegter Energiekarten entfernen und an das neue Aktive Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Calling Wave",
				fr: "Appel de vague",
				de: "Wellenruf"
			},
			effect: {
				en: "Search your deck for up to 2 Gastrodon and put them onto your Bench as Basic Pokémon. Put 2 damage counters on each of them. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 Tritosor et placez-les sur votre Banc comme Pokémon de base. Placez 2 marqueurs de dégât sur chacun d'eux. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Gastrodon-Karten und lege sie als Basis-Pokémon auf deine Bank. Lege 2 Schadensmarken auf jede von ihnen. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
				de: "Wellenplatscher"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278595,
		tcgplayer: 85658
	}
}

export default card

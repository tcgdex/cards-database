import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Unown R",
		fr: "Zarbi R",
		de: "Icognito R"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "RETIRE",
				fr: "RETIRER",
				de: "RETIRE"
			},
			effect: {
				en: "Once during your turn, if Unown R is on your Bench, you may discard Unown R and all cards attached to it. (This doesn't count as a Knocked Out Pokémon.) Then, draw a card.",
				fr: "Une seule fois lors de votre tour, si Zarbi R est sur votre Banc, vous pouvez défausser Zarbi R ainsi que toutes les cartes qui lui sont attachées. (Le Pokémon n'est pas K.O.) Ensuite, piochez une carte.",
				de: "Einmal während deines Zuges kannst du, wenn Icognito R auf deiner Bank ist, Icognito R und alle Karten, die an Icognito R angelegt sind, auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.) Danach ziehe 1 Karte."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "Move any number of basic Energy cards attached to your Pokémon to your other Pokémon in any way you like.",
				fr: "Déplacez autant de cartes Énergie de base attachées à vos Pokémon que vous le voulez sur vos autres Pokémon de la façon que vous voulez.",
				de: "Lege beliebig viele Basis-Energiekarten, die an deinen Pokémon angelegt sind, in beliebiger Verteilung an deine anderen Pokémon an."
			},

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
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de ZARBI est apparu en premier."
	}
}

export default card

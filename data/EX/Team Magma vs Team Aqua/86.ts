import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Aqua Energy",
		fr: "Énergie Magma",
		de: "Aqua-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Aqua Energy can be attached only to a Pokémon with Team Aqua in its name. Aqua Energy provides Water and Darkness Energy but provides 2 Energy at a time. (Doesn't count as a basic Energy card when not in play and has no other effect than providing Energy.) At the end of your turn, discard Aqua Energy.",
		de: "Aqua-Energie kann nur an ein Pokémon mit „Team Aqua“ im Namen angelegt werden. Aqua-Energie zählt als {W}- und {D}-Energie, spendet aber zwei Energien auf einmal. (Zählt nicht als Basis-Energiekarte, wenn sie nicht im Spiel ist.) Lege Aqua-Energie am Ende deines Zuges auf deinen Ablagestapel.",
		fr: "Énergie Aqua ne peut être attachée qu'à un Pokémon dont le nom comporte Team Aqua. Énergie Aqua fournit 2 Énergies à la fois, Eau et Obscurité. (Elle ne compte pas comme carte Énergie de base lorsqu'elle n'est pas en jeu et n'a pas d'autre effet que de fournir de l'Énergie.) À la fin de votre tour, défaussez Énergie Aqua."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275863,
				tcgplayer: 83565
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275863,
				tcgplayer: 83565
			}
		},
	],

	retreat: 0
}

export default card

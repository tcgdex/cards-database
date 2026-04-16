import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Dark Metal Energy",
		fr: "Énergie Métal Obscur",
		de: "Finstere Metall-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Lege Finstere Metall-Energie an 1 deiner Pokémon an. Während Finstere Metall-Energie im Spiel ist, liefert diese Karte - und -Energie, aber immer nur 1 Energie auf einmal. (Zählt nicht als Basis-Energiekarte, wenn sie nicht im Spiel ist und hat keinen Effekt, außer dass sie Energie spendet.)",
		fr: "Attachez Énergie Métal Obscur à 1 de vos Pokémon. Lorsqu'elle est en jeu, Énergie Métal Obscur fournit les types d'énergie Obscurité et Métal (mais seulement un à la fois). (Elle ne compte pas comme carte Énergie de base lorsqu'elle n'est pas en jeu et n'a pas d'autre effet que de fournir de l'Énergie.)",
	},

	thirdParty: {
		cardmarket: 277067,
		tcgplayer: 84629
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card

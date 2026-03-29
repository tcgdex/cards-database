import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
		de: "Finsternis-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "If the Pokémon Darkness Energy is attached to damages the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it´s  or has Dark in its name.Darkness Energy provides  Energy. (Doesn´t count as a Basic Energy card.)",
		fr: "Si le Pokémon auquel Énergie Obscurité est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet sauf si le Pokémon Attaquant est un Pokémon Obscurité ou si son nom comporte Obscur. Énergie Obscurité fournit une Énergie Obscurité. (Elle ne compte pas comme carte Énergie de base).",
	},

	thirdParty: {
		tcgplayer: 84684,
		cardmarket: 276597
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		}
	]
}

export default card

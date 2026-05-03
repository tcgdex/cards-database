import { Card } from '../../../interfaces'
import Set from '../Delta Species'

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
		de: "If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance). Ignore this effect unless the Attacking Pokémon is  or has Dark in its name. Darkness Energy provides  Energy. (Doesn't count as basic Energy card.)",
		fr: "Si le Pokémon Énergie Obscurité est attaché à des attaques, l'attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet sauf si le Pokémon Attaquant est un Pokémon Obscurité ou si son nom comporte Obscur. Énergie Obscurité fournit une Énergie Obscurité. (Elle ne compte pas comme carte Énergie de base).",
	},

	thirdParty: {
		cardmarket: 276866,
		tcgplayer: 84686
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card


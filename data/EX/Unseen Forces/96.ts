import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
		de: "Darkness Energy*"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance). Ignore this effect unless the Attacking Pokémon is  or has Dark in its name. Darkness Energy provides  Energy. (Doesn't count as a basic Energy card.)",
		fr: "Si le Pokémon auquel Énergie Obscurité est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet sauf si le Pokémon Attaquant est un Pokémon Obscurité ou si son nom comporte Obscur. Énergie Obscurité fournit une Énergie Obscurité. (Elle ne compte pas comme carte Énergie de base.)",
	},

	thirdParty: {
		cardmarket: 276742,
		tcgplayer: 84685
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

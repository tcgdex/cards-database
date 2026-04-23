import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

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
		de: "If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance). Ignore this effect unless the Attacking Pokémon is  or has Dark in its name. Darkness Energy provides  Energy. (Doesn't count as a basic Energy card.)",
		fr: "Si le Pokémon auquel Énergie Obscurité est attachée attaque, cette attaque inflige 10 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance). Ne tenez pas compte de cet effet si le Pokémon Attaquant n'est pas Obscurité ou si son nom ne contient pas le mot Obscur. Énergie Obscurité fournit une Énergie Obscurité. (Elle ne compte pas comme Énergie de base).",
	},

	thirdParty: {
		cardmarket: 275741,
		tcgplayer: 84683
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["winner"]
		}
	]
}

export default card

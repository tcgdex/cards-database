import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Énergie obscurité",
		de: "Finsternis-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "If the Pokémon Darkness Energy is attached to damages the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it´s  or has Dark in its name.Darkness Energy provides  Energy. (Doesn´t count as a Basic Energy card.)",
		fr: "Si le Pokémon sur lequel est attachée Énergie obscurité inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 10 dégâts supplémentaires au Pokémon Défenseur.",
	},

	thirdParty: {
		cardmarket: 274504,
		tcgplayer: 84695
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

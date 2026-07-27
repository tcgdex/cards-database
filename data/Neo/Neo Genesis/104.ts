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
		en: "If the Pokémon Darkness Energy is attached to damages the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it's Darkness or has Dark in its name.\nDarkness Energy provides Darkness Energy. (Doesn't count as a basic Energy card.)",
		de: "If the Pokémon Darkness Energy is attached to damages the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it´s  or has Dark in its name.Darkness Energy provides  Energy. (Doesn´t count as a Basic Energy card.)"
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274504,
				tcgplayer: 84695
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274504,
				tcgplayer: 84695
			}
		}
	]
}

export default card

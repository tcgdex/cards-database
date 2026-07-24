import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Miracle Energy",
		fr: "Énergie miracle",
		de: "Wunder-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "You can't have more than 1 Miracle Energy in your deck. Attach Miracle Energy to 1 of your Shining or Light Pokémon. At the end of your turn, discard Miracle Energy.\nWhile in play, Miracle Energy counts as every type of Energy but provides only 2 Energy at a time.",
		de: "Du kannst maximal 1 Wunder-Energie in deinem Deck haben. Lege Wunder-Energie an eines deiner Schimmernden oder Hellen Pokémon an. Lege am Ende deines Zuges Wunder-Energie auf deinen Ablagestapel. Solange Wunder-Energie im Spiel ist, zählt Wunder-Energie als jeder Energietyp, erzeugt aber 2 Energie gleichzeitig."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274668,
				tcgplayer: 87496
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274668,
				tcgplayer: 87496
			}
		}
	]
}

export default card

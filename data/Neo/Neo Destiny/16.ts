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
		de: "Du kannst maximal 1 Wunder-Energie in deinem Deck haben. Lege Wunder-Energie an eines deiner Schimmernden oder Hellen Pokémon an. Lege am Ende deines Zuges Wunder-Energie auf deinen Ablagestapel. Solange Wunder-Energie im Spiel ist, zählt Wunder-Energie als jeder Energietyp, erzeugt aber 2 Energie gleichzeitig.",
		fr: "Vous ne pouvez pas avoir plus d'une carte Énergie miracle dans votre deck. Attachez Énergie miracle à un de vos Pokémon Brillants ou lumineux. À la fin de votre tour, défaussez -vous d'Énergie miracle. Tant qu'Énergie miracle est en jeu, elle remplace n'importe quel type d'Énergie mais ne fournit que 2 Énergies différentes à la fois.",
	},

	thirdParty: {
		cardmarket: 274668,
		tcgplayer: 87496
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card

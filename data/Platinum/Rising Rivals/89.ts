import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Bebe's Search",
		fr: "La recherche d'Amelle",
		de: "Lanas Suche"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez une carte dans votre main et placez-la au-dessus de votre deck. Choisissez un Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. (Si c'est la seule carte que vous avez en main, vous ne pouvez pas la jouer.)",
		de: "Wähle 1 Karte von deiner Hand und lege sie auf dein Deck. Durchsuche dein Deck nach einer Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. (Wenn diese Karte die einzige Karte auf deiner Hand ist, kannst du sie nicht spielen.)",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278663,
		tcgplayer: 83763
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league"
		},
		{
			type: "normal",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"]
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"]
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"]
		}
	]
}

export default card

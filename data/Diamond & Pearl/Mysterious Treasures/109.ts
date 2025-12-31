import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

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
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez une carte de votre main et placez-la au dessus de votre deck. Choisissez dans votre deck un Pokémon, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. (Si c'est la seule carte que vous ayez en main, vous ne pouvez pas jouer cette carte.)",
		de: "Wähle 1 Karte von deiner Hand und lege sie auf dein Deck. Durchsuche dein Deck nach einer Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. (Wenn diese Karte die einzige Karte auf deiner Hand ist, kannst du sie nicht spielen.)"
	},

	thirdParty: {
		cardmarket: 277738,
		tcgplayer: 83761
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
		}
	]
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Archie",
		fr: "Arthur",
		de: "Adrian"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nCherchez dans votre deck un Pokémon dont le nom comporte Team Aqua et placez-le sur votre Banc. Ensuite, mélangez votre deck. Traitez le nouveau Pokémon de Banc comme un Pokémon de base. Si c'est un Pokémon de niveau 2, placez 2 marqueurs de dégât sur ce Pokémon.",
		de: "Durchsuche dein Deck nach einem Pokémon mit \"Aqua's\" im Namen. Mische dein Deck danach. Behandle das neue Pokémon wie ein Basispokémon. Ist es ein Phase 2 Pokémon, lege zwei Schadensmarken auf das Pokémon."
	},

	thirdParty: {
		cardmarket: 276048,
		tcgplayer: 83612
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card

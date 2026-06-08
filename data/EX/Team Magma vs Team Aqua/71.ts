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
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for a Pokémon with Team Aqua in its name and put it onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as a Basic Pokémon. If it is a Stage 2 Pokémon, put 2 damage counters on that Pokémon.",
		fr: "Cherchez dans votre deck un Pokémon dont le nom comporte Team Aqua et placez-le sur votre Banc. Ensuite, mélangez votre deck. Traitez le nouveau Pokémon de Banc comme un Pokémon de base. Si c'est un Pokémon de niveau 2, placez 2 marqueurs de dégât sur ce Pokémon.",
		de: "Durchsuche dein Deck nach einem Pokémon mit \"Aqua's\" im Namen. Mische dein Deck danach. Behandle das neue Pokémon wie ein Basispokémon. Ist es ein Phase 2 Pokémon, lege zwei Schadensmarken auf das Pokémon.",
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

import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Maxie",
		fr: "Max",
		de: "Marc"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your hand or discard pile for a Pokémon with Team Magma in its name and put it onto your Bench. Treat the new Benched Pokémon as a Basic Pokémon. If it is a Stage 2 Pokémon, put 2 damage counters on that Pokémon.",
		fr: "Cherchez dans votre main ou votre pile de défausse un Pokémon dont le nom comporte Team Magma et placez-le sur votre Banc. Traitez le nouveau Pokémon de Banc comme un Pokémon de base. Si c'est un Pokémon de niveau 2, placez 2 marqueurs de dégât sur ce Pokémon.",
		de: "Du kannst in jedem Zug nur eine Unterstützerkarte spielen. Wenn du diese Karte ausspielst, lege sie neben dein Aktives Pokémon. Lege diese Karte am Ende deines Zuges auf deinen Ablagestapel. Durchsuche deine Hand oder deinen Ablagestapel nach einem Pokémon mit „Team Magma“ im Namen und lege es auf deine Bank. Behandle das Pokémon wie ein Basis-Pokémon. Wenn es sich um ein Pokémon der Phase 2 handelt, lege 2 Schadensmarken darauf."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275850,
				tcgplayer: 87270
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275850,
				tcgplayer: 87270
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				cardmarket: 871873,
				tcgplayer: 477404
			}
		}
	],

	retreat: 0
}

export default card

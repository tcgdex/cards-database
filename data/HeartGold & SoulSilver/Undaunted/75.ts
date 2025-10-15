import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Legend Box",
		fr: "Boîte légendaire",
		de: "Legendenkiste"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Dévoilez les 10 cartes du dessus de votre deck. Si vous dévoilez les deux moitiés d’un Pokémon LÉGENDE, placez ces cartes sur votre Banc et attachez toutes les cartes Énergie dévoilées à ce Pokémon LÉGENDE. Mélangez les autres cartes avec votre deck. (Vous ne pouvez jouer qu’un seul Pokémon LÉGENDE de cette façon.)",
		en: "Reveal the top 10 cards of your deck. If you reveal both halves of a Pokémon LEGEND, put those cards onto your Bench and attach all revealed Energy cards to that Pokémon LEGEND. Shuffle the other cards back into your deck. (You can play only 1 Pokémon LEGEND in this way.)",
		de: "Decke die obersten 10 Karten deines Decks auf. Falls du beide Hälften einer Pokémon-LEGENDE aufdeckst, lege diese auf deine Bank und lege alle aufgedeckten Energiekarten an die Pokémon-LEGENDE an. Mische die anderen Karten anschließend in dein Deck. (Auf diese Art kannst du nur 1 Pokémon-LEGENDE spielen.)"
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	hp: 0,

	thirdParty: {
		cardmarket: 279328,
		tcgplayer: 86709
	}
}

export default card

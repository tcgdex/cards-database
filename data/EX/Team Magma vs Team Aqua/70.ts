import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma Schemer",
		fr: "Manipulateur de Team Magma",
		de: "Team Magma Intrigant"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard any 1 Pokémon from your hand. Then draw 3 cards. If you discarded a Pokémon with Team Magma in its name, draw 4 cards instead.",
		fr: "Défaussez 1 Pokémon de votre main. Ensuite, piochez 3 cartes. Si vous avez défaussé un Pokémon dont le nom comporte Team Magma, piochez 4 cartes.",
		de: "Du kannst in jedem Zug nur eine Unterstützerkarte spielen. Wenn du diese Karte ausspielst, lege sie neben dein Aktives Pokémon. Lege diese Karte am Ende deines Zuges auf deinen Ablagestapel. Lege 1 Pokémon von deiner Hand auf den Ablagestapel. Ziehe danach 3 Karten. Ziehe stattdessen 4 Karten, wenn du auf diese Weise ein Pokémon mit „Team Magma“ im Namen abwirfst."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275847,
				tcgplayer: 89816
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275847,
				tcgplayer: 89816
			}
		},
	],

	retreat: 0
}

export default card

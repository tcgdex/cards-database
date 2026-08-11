import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Multi Technical Machine 01",
		fr: "Machine multi-technique 01",
		de: "Vielzweckmaschine 01"
	},

	illustrator: '"Big Mama" Tagawa"Big Mama\" Tagawa',
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Technical Machine",

	effect: {
		en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card’s attack instead of its own. At the end of your turn, discard Multi Technical Machine 01.",
		fr: "Attachez cette carte à 1 des Pokémon que vous avez en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de ses attaques. À la fin de votre tour, défaussez Machine multi-technique 01.",
		de: "Lege diese Karte an eines deiner Pokémon an. Dieses Pokémon kann diesen Angriff anstelle seiner eigenen verwenden. Lege die Vielzweckmaschine 01 am Ende deines Zuges auf deinen Ablagestapel."
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paralyzing Gaze",
				de: "Lähmender Blick"
			},
			effect: {
				en: "The Defending Pokémon is now Paralyzed.",
				de: "Das Verteidigende Pokémon ist jetzt gelähmt."
			},
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87636,
				cardmarket: 277440
			},
		},
	],

}

export default card

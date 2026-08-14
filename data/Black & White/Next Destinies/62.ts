import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Beheeyem",
		fr: "Neitram",
		es: "Beheeyem",
		it: "Beheeyem",
		pt: "Beheeyem",
		de: "Megalon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		606,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
		de: "Pygraulon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Brain Control",
				fr: "Contrôle Cérébral",
				de: "Gedankenkontrolle"
			},
			effect: {
				en: "Your opponent reveals his or her hand. Choose a card from there and put it on the bottom of your opponent's deck.",
				fr: "Votre adversaire montre sa main. Choisissez-y une carte et mettez-la en dessous du deck de votre adversaire.",
				de: "Dein Gegner deckt seine Handkarten auf. Wähle 1 dieser Karten und lege sie unter das Deck deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
				de: "Psystrahl"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It can manipulate an opponent's memory. Apparently, it communicates by flashing its three different-colored fingers.",
		de: "Manipuliert das gegnerische Gedächtnis. Lässt es seine drei bunten Finger aufleuchten, kommuniziert es offenbar."
	},

	thirdParty: {
		cardmarket: 280287,
		tcgplayer: 83779
	}
}

export default card

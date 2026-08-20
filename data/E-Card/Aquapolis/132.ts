import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Psychic Cube 01",
		fr: "Cube psy 01",
		de: "Psycho-Würfel 01"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your Psychic Pokémon in play. That Pokémon may us this card's attack instead of its own. At the end of your turn, discard Psychic Cube 01.",
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube psy 01.",
		de: "Lege diese Karte an 1 deiner {P}-Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Psycho-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [
		{
			name: {
				en: "Psy Confuse",
				de: "Psy-Verwirrung",
				fr: "Confusion psy"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt.",
				fr: "Le Pokémon Défenseur est maintenant Confus."
			},
			cost: [
				"Psychic",
			]
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88412,
				cardmarket: 275208
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88412,
				cardmarket: 275208
			}
		},
	]
}

export default card

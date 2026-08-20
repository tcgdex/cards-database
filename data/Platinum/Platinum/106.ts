import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Galactic HQ",
		fr: "QG Galaxie",
		de: "Galaktik-Zentrale"
	},

	illustrator: "Ryota Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Whenever any player plays any Pokémon from his or her hand to evolve his or her Pokémon, put 2 damage counters on that Pokémon.",
		fr: "Lorsqu'1 des joueurs joue un Pokémon de sa main pour faire évoluer son Pokémon, placez 2 marqueurs de dégât sur ce Pokémon.",
		de: "Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt. Wenn eine andere Karte mit dem gleichen Namen im Spiel ist, kannst du diese Karte nicht spielen. Immer wenn ein Spieler eine Pokémon-Karte von seiner Hand spielt, um eines seiner Pokémon zu entwickeln, lege 2 Schadensmarken auf dieses Pokémon."
	},

	trainerType: "Stadium",

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85603,
				cardmarket: 278527
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278527,
				tcgplayer: 85603
			}
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479900
			}
		}
	],

	retreat: 0
}

export default card

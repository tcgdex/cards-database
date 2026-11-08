import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [715],
	set: Set,

	name: {
		'en-us': "Noivern",
		'fr-fr': "Bruyverne",
		'es-es': "Noivern",
		'it-it': "Noivern",
		'pt-br': "Noivern",
		'de-de': "UHaFnir"
	},

	illustrator: "aoki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Radiant Hunt",
			'fr-fr': "Chasse Radieuse",
			'es-es': "Caza Radiante",
			'it-it': "Caccia Lucente",
			'pt-br': "Caçada Radiante",
			'de-de': "Strahlende Jagd"
		},

		effect: {
			'en-us': "Knock Out 1 of your opponent's Radiant Pokémon.",
			'fr-fr': "Mettez K.O. l'un des Pokémon Radieux de votre adversaire.",
			'es-es': "Deja Fuera de Combate a 1 de los Pokémon Radiantes de tu rival.",
			'it-it': "Metti KO uno dei Pokémon Lucenti del tuo avversario.",
			'pt-br': "Nocauteie 1 dos Pokémon Radiantes do seu oponente.",
			'de-de': "Mache 1 Strahlendes Pokémon deines Gegners kampfunfähig."
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			'en-us': "Seventh Echo",
			'fr-fr': "Septième Écho",
			'es-es': "Séptimo Eco",
			'it-it': "Settima Eco",
			'pt-br': "Sétimo Eco",
			'de-de': "Siebtes Echo"
		},

		effect: {
			'en-us': "Draw cards until you have 7 cards in your hand.",
			'fr-fr': "Piochez des cartes jusqu'à en avoir 7 en main.",
			'es-es': "Roba cartas hasta que tengas 7 cartas en tu mano.",
			'it-it': "Pesca fino ad avere sette carte in mano.",
			'pt-br': "Compre cartas até ter 7 cartas na sua mão.",
			'de-de': "Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast."
		},

		damage: 70
	}],

	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "Aggressive and cruel, this Pokémon will ruthlessly torment enemies that are helpless in the dark.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682180,
				tcgplayer: 451786
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682180,
				tcgplayer: 451786
			}
		},
	],
}

export default card

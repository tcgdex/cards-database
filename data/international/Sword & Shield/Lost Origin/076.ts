import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		'en-us': "Hisuian Zoroark",
		'fr-fr': "Zoroark de Hisui",
		'es-es': "Zoroark de Hisui",
		'it-it': "Zoroark di Hisui",
		'pt-br': "Zoroark de Hisui",
		'de-de': "Hisui-Zoroark"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Hisuian Zorua",
		'fr-fr': "Zorua de Hisui",
		'es-es': "Zorua de Hisui",
		'it-it': "Zorua di Hisui",
		'pt-br': "Zorua de Hisui",
		'de-de': "Hisui-Zorua"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Doom Curse",
			'fr-fr': "Malédiction Tragique",
			'es-es': "Maldición Trágica",
			'it-it': "Maledizione Avversa",
			'pt-br': "Maldição Sinistra",
			'de-de': "Verhängnisvoller Fluch"
		},

		effect: {
			'en-us': "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			'fr-fr': "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O.",
			'es-es': "Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
			'it-it': "Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
			'pt-br': "O Pokémon Defensor será Nocauteado no final do próximo turno do seu oponente.",
			'de-de': "Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Call Back",
			'fr-fr': "Relance",
			'es-es': "Volver a Llamar",
			'it-it': "Chiamata di Ritorno",
			'pt-br': "Chamado de Volta",
			'de-de': "Rückruf"
		},

		effect: {
			'en-us': "Put a card from your discard pile into your hand.",
			'fr-fr': "Ajoutez à votre main une carte de votre pile de défausse.",
			'es-es': "Pon 1 carta de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
			'pt-br': "Coloque 1 carta da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand."
		}
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 674366
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670814,
				tcgplayer: 283957
			}
		},
		{
			type: 'holo',
			stamp: ['gamestop'],
			thirdParty: {
				cardmarket: 742040
			}
		},
		{
			type: 'holo',
			stamp: ['eb-games'],
			thirdParty: {
				cardmarket: 884418
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 670814,
				tcgplayer: 283957
			}
		},
	],
}

export default card

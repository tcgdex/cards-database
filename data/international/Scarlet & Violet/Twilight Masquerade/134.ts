import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [242],
	set: Set,

	name: {
		'en-us': "Blissey ex",
		'fr-fr': "Leuphorie-ex",
		'es-es': "Blissey ex",
		'it-it': "Blissey-ex",
		'pt-br': "Blissey ex",
		'de-de': "Heiteira-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Happy Switch",
			'fr-fr': "Échange Heureux",
			'es-es': "Cambio Feliz",
			'it-it': "Scambio Felice",
			'pt-br': "Substituição Animada",
			'de-de': "Heiterer Tausch"
		},

		effect: {
			'en-us': "Once during your turn, you may move a Basic Energy from 1 of your Pokémon to another of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez déplacer une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
			'es-es': "Una vez durante tu turno, puedes mover 1 Energía Básica de uno de tus Pokémon a otro de tus Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi spostare un'Energia base da uno dei tuoi Pokémon a un altro.",
			'pt-br': "Uma vez durante o seu turno, você poderá mover uma Energia Básica de 1 dos seus Pokémon para outro Pokémon seu.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Return",
			'fr-fr': "Retour",
			'es-es': "Retribución",
			'it-it': "Ritorno",
			'pt-br': "Retorno",
			'de-de': "Rückkehr"
		},

		effect: {
			'en-us': "You may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'it-it': "Puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão.",
			'de-de': "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769308,
				tcgplayer: 550178
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841259,
			}
		},
	],

	suffix: "ex",
	illustrator: "Iwamoto05",

}

export default card
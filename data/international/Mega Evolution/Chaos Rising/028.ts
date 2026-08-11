import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "If its coat becomes fully charged with electricity, its tail lights up. Flaaffy can fire wool that zaps on impact.",
	},


	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'es-mx': "Flaaffy",
		'de-de': "Waaty",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [180],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Mareep"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Disconnect",
			'fr-fr': "Déconnexion",
			'es-es': "Desconectar",
			'es-mx': "Desconectar",
			'de-de': "Unterbrechen",
			'it-it': "Disconnessione",
			'pt-br': "Desconexão"
		},

		cost: ["Lightning", "Colorless"],
		damage: 40,

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Item cards from their hand.",
			'fr-fr': "Pendant son prochain tour, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
			'es-es': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'es-mx': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen.",
			'it-it': "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			'pt-br': "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886420,
				tcgplayer: 693487
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886420,
				tcgplayer: 693487
			}
		},
	],
}

export default card

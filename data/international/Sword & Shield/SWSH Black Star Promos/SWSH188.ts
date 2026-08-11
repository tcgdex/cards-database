import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [400],
	set: Set,

	name: {
		'fr-fr': "Castorno",
		'de-de': "Bidifas",
		'es-es': "Bibarel",
		'pt-br': "Bibarel",
		'it-it': "Bibarel",
		'en-us': "Bibarel"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'fr-fr': "Keunotor",
		'de-de': "Bidiza",
		'es-es': "Bidoof",
		'pt-br': "Bidoof",
		'it-it': "Bidoof",
		'en-us': "Bidoof"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Incisives Travailleuses",
			'de-de': "Fleißiger Nager",
			'es-es': "Incisivos Laboriosos",
			'pt-br': "Incisivos Engenhosos",
			'it-it': "Alacrincisivi",
			'en-us': "Industrious Incisors"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
			'de-de': "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast.",
			'es-es': "Una vez durante tu turno, puedes robar cartas hasta que tengas 5 cartas en tu mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar cartas até ter 5 cartas na sua mão.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare fino ad avere cinque carte in mano.",
			'en-us': "Once during your turn, you may draw cards until you have 5 cards in your hand."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Éclate-Queue",
			'de-de': "Schwanzschmetterer",
			'es-es': "Coletazo",
			'pt-br': "Pancada de Cauda",
			'it-it': "Coda Esplosiva",
			'en-us': "Tail Smash"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'en-us': "Flip a coin. If tails, this attack does nothing."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	description: {
		'en-us': "It makes its nest by damming streams with bark and mud. It is known as an industrious worker."
	},

	thirdParty: {
		cardmarket: 606602
	}
}

export default card

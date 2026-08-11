import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [400],
	set: Set,

	name: {
		'en-us': "Bibarel",
		'fr-fr': "Castorno",
		'es-es': "Bibarel",
		'it-it': "Bibarel",
		'pt-br': "Bibarel",
		'de-de': "Bidifas"
	},

	illustrator: "OKACHEKE",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'es-es': "Bidoof",
		'it-it': "Bidoof",
		'pt-br': "Bidoof",
		'de-de': "Bidiza"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Industrious Incisors",
			'fr-fr': "Incisives Travailleuses",
			'es-es': "Incisivos Laboriosos",
			'it-it': "Alacrincisivi",
			'pt-br': "Incisivos Engenhosos",
			'de-de': "Fleißiger Nager"
		},

		effect: {
			'en-us': "Once during your turn, you may draw cards until you have 5 cards in your hand.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
			'es-es': "Una vez durante tu turno, puedes robar cartas hasta que tengas 5 cartas en tu mano.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare fino ad avere cinque carte in mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar cartas até ter 5 cartas na sua mão.",
			'de-de': "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tail Smash",
			'fr-fr': "Éclate-Queue",
			'es-es': "Coletazo",
			'it-it': "Coda Esplosiva",
			'pt-br': "Pancada de Cauda",
			'de-de': "Schwanzschmetterer"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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
		'en-us': "It makes its nest by damming streams with bark and mud. It is known as an industrious worker.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608667,
				tcgplayer: 263846
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608667,
				tcgplayer: 263846
			}
		},
	],
}

export default card

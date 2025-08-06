import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Castorno",
		de: "Bidifas",
		es: "Bibarel",
		pt: "Bibarel",
		it: "Bibarel",
		en: "Bibarel"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Keunotor",
		de: "Bidiza",
		es: "Bidoof",
		pt: "Bidoof",
		it: "Bidoof",
		en: "Bidoof"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Incisives Travailleuses",
			de: "Fleißiger Nager",
			es: "Incisivos Laboriosos",
			pt: "Incisivos Engenhosos",
			it: "Alacrincisivi",
			en: "Industrious Incisors"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
			de: "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast.",
			es: "Una vez durante tu turno, puedes robar cartas hasta que tengas 5 cartas en tu mano.",
			pt: "Uma vez durante o seu turno, você poderá comprar cartas até ter 5 cartas na sua mão.",
			it: "Una sola volta durante il tuo turno, puoi pescare fino ad avere cinque carte in mano.",
			en: "Once during your turn, you may draw cards until you have 5 cards in your hand."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Éclate-Queue",
			de: "Schwanzschmetterer",
			es: "Coletazo",
			pt: "Pancada de Cauda",
			it: "Coda Esplosiva",
			en: "Tail Smash"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			en: "Flip a coin. If tails, this attack does nothing."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "It makes its nest by damming streams with bark and mud. It is known as an industrious worker."
	},

	thirdParty: {
		cardmarket: 606602
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Bibarel",
		fr: "Castorno",
		es: "Bibarel",
		it: "Bibarel",
		pt: "Bibarel",
		de: "Bidifas"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
		es: "Bidoof",
		it: "Bidoof",
		pt: "Bidoof",
		de: "Bidiza"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Industrious Incisors",
			fr: "Incisives Travailleuses",
			es: "Incisivos Laboriosos",
			it: "Alacrincisivi",
			pt: "Incisivos Engenhosos",
			de: "Fleißiger Nager"
		},

		effect: {
			en: "Once during your turn, you may draw cards until you have 5 cards in your hand.",
			fr: "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
			es: "Una vez durante tu turno, puedes robar cartas hasta que tengas 5 cartas en tu mano.",
			it: "Una sola volta durante il tuo turno, puoi pescare fino ad avere cinque carte in mano.",
			pt: "Uma vez durante o seu turno, você poderá comprar cartas até ter 5 cartas na sua mão.",
			de: "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tail Smash",
			fr: "Éclate-Queue",
			es: "Coletazo",
			it: "Coda Esplosiva",
			pt: "Pancada de Cauda",
			de: "Schwanzschmetterer"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card

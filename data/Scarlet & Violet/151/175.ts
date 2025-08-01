import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [54],
	set: Set,

	name: {
		fr: "Psykokwak",
		en: "Psyduck",
		es: "Psyduck",
		it: "Psyduck",
		pt: "Psyduck",
		de: "Enton"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Réflexion Excessive",
			en: "Overthink",
			es: "Cavilar",
			it: "Rimuginare",
			pt: "Fundir a Cuca",
			de: "Kopfzerbrechen"
		},

		effect: {
			fr: "Pendant son prochain tour, chaque fois que votre adversaire lance une pièce, considérez que c'est pile.",
			en: "During your opponent's next turn, whenever they flip a coin, treat it as tails.",
			es: "Durante el próximo turno de tu rival, cada vez que este lance una moneda, se considerará que ha salido cruz.",
			it: "Ogni volta che il tuo avversario lancia una moneta durante il suo prossimo turno, il risultato viene considerato croce.",
			pt: "Durante o próximo turno do seu oponente, sempre que ele jogar uma moeda, trate-a como coroa.",
			de: "Jedes Mal, wenn dein Gegner während seines nächsten Zuges 1 Münze wirft, gilt das Ergebnis als Zahl."
		}
	}, {
		cost: ["Water"],

		name: {
			fr: "Pistolet à O",
			en: "Water Gun",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Whisker",

	thirdParty: {
		cardmarket: 733649
	}
}

export default card
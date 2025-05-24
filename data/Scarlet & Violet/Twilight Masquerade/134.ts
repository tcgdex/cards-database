import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [242],
	set: Set,

	name: {
		en: "Blissey ex",
		fr: "Leuphorie-ex",
		es: "Blissey ex",
		it: "Blissey-ex",
		pt: "Blissey ex",
		de: "Heiteira-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Happy Switch",
			fr: "Échange Heureux",
			es: "Cambio Feliz",
			it: "Scambio Felice",
			pt: "Substituição Animada",
			de: "Heiterer Tausch"
		},

		effect: {
			en: "Once during your turn, you may move a Basic Energy from 1 of your Pokémon to another of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez déplacer une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
			es: "Una vez durante tu turno, puedes mover 1 Energía Básica de uno de tus Pokémon a otro de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi spostare un'Energia base da uno dei tuoi Pokémon a un altro.",
			pt: "Uma vez durante o seu turno, você poderá mover uma Energia Básica de 1 dos seus Pokémon para outro Pokémon seu.",
			de: "Einmal während deines Zuges kannst du 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Return",
			fr: "Retour",
			es: "Retribución",
			it: "Ritorno",
			pt: "Retorno",
			de: "Rückkehr"
		},

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			it: "Puoi pescare fino ad avere sei carte in mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão.",
			de: "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Iwamoto05"
}

export default card
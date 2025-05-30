import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Quaquaval",
		fr: "Palmaval",
		de: "Bailonda",
		it: "Quaquaval",
		es: "Quaquaval",
		pt: "Quaquaval"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Energy Carnival",
			fr: "Carnaval Énergétique",
			de: "Karneval der Energie",
			it: "Carnevale Energetico",
			es: "Carnaval de Energía",
			pt: "Carnaval de Energia"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic Energy card from your hand to 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie de base de votre main à l'un de vos Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Basis-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base dalla tua mano.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu mano a uno de tus Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Básica da sua mão a 1 dos seus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Hydro Kick",
			fr: "Pied Hydro",
			de: "Hydrokick",
			it: "Idrocalcio",
			es: "Hidropatada",
			pt: "Chute d'Água"
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card
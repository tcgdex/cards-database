import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Quaquaval",
		fr: "Palmaval",
		es: "Quaquaval",
		it: "Quaquaval",
		pt: "Quaquaval",
		de: "Bailonda"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Quaxwell"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Energy Carnival",
			fr: "Carnaval Énergétique",
			es: "Carnaval de Energía",
			it: "Carnevale Energetico",
			pt: "Carnaval de Energia",
			de: "Karneval der Energie"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic Energy card from your hand to 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie de base de votre main à l'un de vos Pokémon.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu mano a uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base dalla tua mano.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Básica da sua mão a 1 dos seus Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Basis-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Hydro Kick",
			fr: "Pied Hydro",
			es: "Hidropatada",
			it: "Idrocalcio",
			pt: "Chute d'Água",
			de: "Hydrokick"
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Kouki Saitou",

	thirdParty: {
		cardmarket: 702348
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Poltchageist",
		fr: "Poltchageist",
		es: "Poltchageist",
		it: "Poltchageist",
		pt: "Poltchageist",
		de: "Mortcha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tea Server",
			fr: "Serveur de Thé",
			es: "Servir el Té",
			it: "Servitè",
			pt: "Serviço de Chá",
			de: "Teeservice"
		},

		effect: {
			en: "Put a Basic {G} Energy card from your discard pile into your hand.",
			fr: "Ajoutez une carte Énergie {G} de base de votre pile de défausse à votre main.",
			es: "Pon 1 carta de Energía {G} Básica de tu pila de descartes en tu mano.",
			it: "Prendi una carta Energia base {G} dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Energia {G} Básica da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Basis-{G}-Energiekarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			es: "Ataque Sorpresa",
			it: "Attacco a Sorpresa",
			pt: "Ataque Surpresa",
			de: "Überraschungsangriff"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 769194
	}
}

export default card
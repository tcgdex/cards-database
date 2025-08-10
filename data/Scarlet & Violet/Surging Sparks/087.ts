import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [702],
	set: Set,

	name: {
		en: "Dedenne",
		fr: "Dedenne",
		es: "Dedenne",
		it: "Dedenne",
		pt: "Dedenne",
		de: "Dedenne"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Electromagnetic Sonar",
			fr: "Sonar Électromagnétique",
			es: "Sonar Electromagnético",
			it: "Sonar Elettromagnetico",
			pt: "Sonar Eletromagnético",
			de: "Elektromagnetisches Sonar"
		},

		effect: {
			en: "Put a Trainer card from your discard pile into your hand.",
			fr: "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
			es: "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
			it: "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Treinador da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Uninori"
}

export default card

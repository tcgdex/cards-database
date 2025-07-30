import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [184],
	set: Set,

	name: {
		en: "Azumarill",
		fr: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		pt: "Azumarill",
		de: "Azumarill"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Sanosuke Sakuma",

	description: {
		en: "The bubble-like pattern on its stomach helps it camouflage itself when it's in the water."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Dive and Rescue",
			fr: "Plongée Rescousse",
			de: "Tauchen und Retten",
			es: "Zambullida y Rescate",
			pt: "Mergulhar e Resgatar",
			it: "Tuffo e Salvataggio"
		},

		effect: {
			en: "Put up to 3 in any combination of Pokémon and Supporter cards from your discard pile into your hand.",
			fr: "Ajoutez à votre main une combinaison d'un maximum de 3 cartes Pokémon et Supporter de votre pile de défausse.",
			de: "Nimm eine beliebige Kombination aus bis zu 3 Pokémon und Unterstützerkarten aus deinem Ablagestapel auf deine Hand.",
			es: "Pon hasta 3 cartas de Pokémon y de Partidario, en cualquier combinación, de tu pila de descartes en tu mano.",
			pt: "Coloque até 3 cartas de Pokémon e de Apoiador da sua pilha de descarte na sua mão em qualquer combinação.",
			it: "Prendi fino a tre Pokémon e carte Aiuto in qualsiasi combinazione dalla tua pila degli scarti e aggiungili alle carte che hai in mano."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Surf",
			fr: "Surf",
			de: "Surfer",
			es: "Surf",
			pt: "Surfar",
			it: "Surf"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582193
	}
}

export default card
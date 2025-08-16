import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [235],
	set: Set,

	name: {
		en: "Smeargle",
		fr: "Queulorior",
		es: "Smeargle",
		it: "Smeargle",
		pt: "Smeargle",
		de: "Farbeagle"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mitsuhiro Arita",

	description: {
		en: "It draws symbols with the fluid that oozes from the tip of its tail. Depending on the symbol, Smeargle fanatics will pay big money for them."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sketching Trash",
			fr: "Corbeille Esquissée",
			de: "Müllskizze",
			es: "Basura Boceto",
			pt: "Desenhando Lixo",
			it: "Bozza di Scarti"
		},

		effect: {
			en: "Put up to 2 Fusion Strike Trainer cards from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 cartes Dresseur Poing de Fusion de votre pile de défausse à votre main.",
			de: "Nimm bis zu 2 Fusionsangriff-Trainerkarten aus deinem Ablagestapel auf deine Hand.",
			es: "Pon hasta 2 cartas de Entrenador de Golpe Fusión de tu pila de descartes en tu mano.",
			pt: "Coloque até 2 cartas de Treinador Golpe Fusão da sua pilha de descarte na sua mão.",
			it: "Prendi fino a due carte Allenatore Colpo Fusione dalla tua pila degli scarti e aggiungile alle carte che hai in mano."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			de: "Schweifvertrimmer",
			es: "Coletón",
			pt: "Surra de Cauda",
			it: "Codabotta"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582944,
		tcgplayer: 253305
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [299],
	set: Set,

	name: {
		fr: "Tarinor",
		en: "Nosepass",
		es: "Nosepass",
		it: "Nosepass",
		pt: "Nosepass",
		de: "Nasgnet"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Collecte de Fer",
			en: "Iron Collecting",
			es: "Acopio de Hierro",
			it: "Raccolta di Ferro",
			pt: "Coleta de Ferro",
			de: "Eisen sammeln"
		},

		effect: {
			fr: "Ajoutez jusqu'à 2 cartes Énergie {M} de base de votre pile de défausse à votre main.",
			en: "Put up to 2 Basic {M} Energy cards from your discard pile into your hand.",
			es: "Pon hasta 2 cartas de Energía {M} Básica de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Energia base {M} dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas de Energia {M} Básica da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Basis-{M}-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Roulé-Boulé",
			en: "Rolling Tackle",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Nobuhiro Imagawa"
}

export default card
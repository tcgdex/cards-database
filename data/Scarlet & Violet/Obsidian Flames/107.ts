import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
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
			fr: "Ajoutez jusqu'à 2 cartes Énergie Metal de base de votre pile de défausse à votre main.",
			en: "Put up to 2 Basic Metal Energy cards from your discard pile into your hand.",
			es: "Pon hasta 2 cartas de Energía Metal Básica de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Energia base Metal dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas de Energia Metal Básica da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Basis-Metal-Energiekarten aus deinem Ablagestapel auf deine Hand."
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
	regulationMark: "G"
}

export default card
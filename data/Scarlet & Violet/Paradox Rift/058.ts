import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		en: "Mewtwo ex",
		fr: "Mewtwo-ex",
		es: "Mewtwo ex",
		it: "Mewtwo-ex",
		pt: "Mewtwo ex",
		de: "Mewtu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Transfer Charge",
			fr: "Charge Transférée",
			es: "Carga Traspaso",
			it: "Spostacarica",
			pt: "Transferir Carga",
			de: "Transferladevorgang"
		},

		effect: {
			en: "Attach up to 2 Basic Psychic Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie Psychic de base de votre pile de défausse à vos Pokémon comme il vous plaît.",
			es: "Une hasta 2 cartas de Energía Psychic Básica de tu pila de descartes a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon fino a due carte Energia base Psychic dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia Psychic Básica da sua pilha de descarte aos seus Pokémon como desejar.",
			de: "Lege bis zu 2 Basis-Psychic-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Photon Kinesis",
			fr: "Photon-Kinésie",
			es: "Kinesia Fotónica",
			it: "Cinèsi Fotonica",
			pt: "Fotocinese",
			de: "Photonenkinese"
		},

		effect: {
			en: "This attack does 30 more damage for each Psychic Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à tous vos Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a cada uno de tus Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card
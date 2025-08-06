import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Dialga Originel V",
		de: "Ur-Dialga V",
		es: "Dialga Origen V",
		pt: "Dialga Forma Origem V",
		it: "Dialga Originale V",
		en: "Origin Forme Dialga V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Revêtement Métal",
			de: "Metallbeschichtung",
			es: "Recubrimiento Metálico",
			pt: "Camada Metálica",
			it: "Metalcopertura",
			en: "Metal Coating"
		},

		effect: {
			fr: "Attachez jusqu'à 2 cartes Énergie {M} de votre pile de défausse à ce Pokémon.",
			de: "Lege bis zu 2 {M}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an.",
			es: "Une hasta 2 cartas de Energía {M} de tu pila de descartes a este Pokémon.",
			pt: "Ligue até 2 cartas de Energia {M} da sua pilha de descarte a este Pokémon.",
			it: "Assegna a questo Pokémon fino a due carte Energia {M} dalla tua pila degli scarti.",
			en: "Attach up to 2 {M} Energy cards from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			fr: "Rupture Temporelle",
			de: "Riss in der Zeit",
			es: "Brecha Temporal",
			pt: "Ruptura Temporal",
			it: "Rottura Temporale",
			en: "Temporal Rupture"
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669483
	}
}

export default card
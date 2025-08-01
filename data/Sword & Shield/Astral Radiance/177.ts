import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Origin Forme Dialga V",
		fr: "Dialga Originel V",
		es: "Dialga Origen V",
		it: "Dialga Originale V",
		pt: "Dialga Forma Origem V",
		de: "Ur-Dialga V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Metal Coating",
			fr: "Revêtement Métal",
			es: "Recubrimiento Metálico",
			it: "Metalcopertura",
			pt: "Camada Metálica",
			de: "Metallbeschichtung"
		},

		effect: {
			en: "Attach up to 2 Metal Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie Metal de votre pile de défausse à ce Pokémon.",
			es: "Une hasta 2 cartas de Energía Metal de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon fino a due carte Energia Metal dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia Metal da sua pilha de descarte a este Pokémon.",
			de: "Lege bis zu 2 Metal-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Temporal Rupture",
			fr: "Rupture Temporelle",
			es: "Brecha Temporal",
			it: "Rottura Temporale",
			pt: "Ruptura Temporal",
			de: "Riss in der Zeit"
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658774
	}
}

export default card
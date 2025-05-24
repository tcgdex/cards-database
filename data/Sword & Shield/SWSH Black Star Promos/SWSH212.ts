import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		pt: "Eevee",
		it: "Eevee",
		en: "Eevee"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Prêt à Tout",
			de: "Vorbereitungen treffen",
			es: "Prepárate",
			pt: "Planejamento",
			it: "Pronti a Tutto",
			en: "Be Prepared"
		},

		effect: {
			fr: "Attachez une carte Énergie de base de votre main à ce Pokémon.",
			de: "Lege 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon an.",
			es: "Une 1 carta de Energía Básica de tu mano a este Pokémon.",
			pt: "Ligue 1 carta de Energia básica da sua mão a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia base dalla tua mano.",
			en: "Attach a basic Energy card from your hand to this Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Morsure",
			de: "Biss",
			es: "Mordisco",
			pt: "Mordida",
			it: "Morso",
			en: "Bite"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	}
}

export default card
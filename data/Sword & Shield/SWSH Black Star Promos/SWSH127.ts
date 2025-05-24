import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Souichirou Gunjima",
	category: "Pokemon",

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	stage: "Basic",

	name: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		pt: "Eevee",
		it: "Eevee"
	},

	rarity: "None",
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Be Prepared",
			fr: "Prêt à Tout",
			de: "Vorbereitungen treffen",
			es: "Prepárate",
			pt: "Planejamento",
			it: "Pronti a Tutto"
		},

		effect: {
			en: "Attach a basic Energy card from your hand to this Pokémon.",
			fr: "Attachez une carte Énergie de base de votre main à ce Pokémon.",
			de: "Lege 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon an.",
			es: "Une 1 carta de Energía Básica de tu mano a este Pokémon.",
			pt: "Ligue 1 carta de Energia básica da sua mão a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia base dalla tua mano."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			es: "Mordisco",
			pt: "Mordida",
			it: "Morso"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
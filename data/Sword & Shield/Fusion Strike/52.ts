import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [120],
	set: Set,

	name: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		en: "No number of injuries can bother Staryu. Its amazing regenerative powers return it to its previous state in half a day!"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Soak in Water",
			fr: "Barbotage",
			de: "Einweichen",
			es: "En Remojo",
			pt: "Deixar de Molho",
			it: "Bagnato Fradicio"
		},

		effect: {
			en: "Attach a {W} Energy card from your hand to this Pokémon.",
			fr: "Attachez une carte Énergie {W} de votre main à ce Pokémon.",
			de: "Lege 1 {W}-Energiekarte aus deiner Hand an dieses Pokémon an.",
			es: "Une 1 carta de Energía {W} de tu mano a este Pokémon.",
			pt: "Ligue 1 carta de Energia {W} da sua mão a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia {W} dalla tua mano."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			de: "Rundumangriff",
			es: "Ataque Giratorio",
			pt: "Ataque Giratório",
			it: "Attacco Rotante"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582186,
		tcgplayer: 253183
	}
}

export default card
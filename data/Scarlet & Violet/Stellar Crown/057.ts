import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke",
		de: "Flegmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dangle Tail",
			fr: "Queue Ballante",
			es: "Cola Reclamo",
			it: "Coda Ciondolante",
			pt: "Cauda Atrapalhada",
			de: "Baumelschweif"
		},

		effect: {
			en: "Put a Pokémon from your discard pile into your hand.",
			fr: "Ajoutez un Pokémon de votre pile de défausse à votre main.",
			es: "Pon 1 Pokémon de tu pila de descartes en tu mano.",
			it: "Prendi un Pokémon dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
			pt: "Coloque um Pokémon da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Pokémon aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
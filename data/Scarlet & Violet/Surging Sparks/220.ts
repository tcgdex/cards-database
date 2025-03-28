import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Latias ex",
		fr: "Latias-ex",
		es: "Latias ex",
		it: "Latias-ex",
		pt: "Latias ex",
		de: "Latias-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Skyliner",
			fr: "Taxi Aérien",
			es: "Estela",
			it: "Aviolinea",
			pt: "Carona Aérea",
			de: "Luftlinie"
		},

		effect: {
			en: "Your Basic Pokémon in play have no Retreat Cost.",
			fr: "Vos Pokémon de base en jeu n'ont pas de Coût de Retraite.",
			es: "Tus Pokémon Básicos en juego no tienen ningún Coste de Retirada.",
			it: "I tuoi Pokémon Base in gioco non hanno costo di ritirata.",
			pt: "Seus Pokémon Básicos em jogo não têm custo de Recuo.",
			de: "Deine Basis-Pokémon im Spiel haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Eon Blade",
			fr: "Lame Éon",
			es: "Tajo Eón",
			it: "Lama Eone",
			pt: "Lâmina da Eternidade",
			de: "Äonenklinge"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		en: "Cinderace V",
		fr: "Pyrobut V",
		es: "Cinderace V",
		it: "Cinderace V",
		pt: "Cinderace V",
		de: "Liberlo V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "aky CG Works",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			de: "Flackern",
			es: "Llama",
			pt: "Chama",
			it: "Fiammata"
		},

		damage: 50
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "All-Out Shot",
			fr: "Tir Extrême",
			de: "Wuchtiger Schuss",
			es: "Disparo Demoledor",
			pt: "Disparo Demolidor",
			it: "Colpo Tutto-per-Tutto"
		},

		damage: 210,

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582177,
		tcgplayer: 253168
	}
}

export default card

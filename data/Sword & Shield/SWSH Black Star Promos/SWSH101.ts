import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Blastoise V",
		fr: "Tortank V",
		de: "Turtok V",
		es: "Blastoise V",
		pt: "Blastoise V",
		it: "Blastoise V"
	},

	rarity: "None",
	dexId: [9],
	hp: 220,
	types: ["Water"],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			de: "Aquaknarre",
			es: "Pistola Agua",
			pt: "Revólver d'Água",
			it: "Pistolacqua"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Torrential Cannon",
			fr: "Canon Torrentiel",
			de: "Sintflutkanone",
			es: "Cañón Torrencial",
			pt: "Canhão Torrencial",
			it: "Cannone Torrenziale"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Torrential Cannon.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Canon Torrentiel.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Sintflutkanone nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Cañón Torrencial.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Canhão Torrencial.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Cannone Torrenziale."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V"
}

export default card

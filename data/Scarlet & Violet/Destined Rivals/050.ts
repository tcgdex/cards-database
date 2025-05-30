import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Clawitzer",
		fr: "Gamblast",
		de: "Wummer",
		it: "Clawitzer",
		es: "Clawitzer",
		pt: "Clawitzer"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			de: "Aquaknarre",
			it: "Pistolacqua",
			es: "Pistola Agua",
			pt: "Revólver d'Água"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Aqua Cannon",
			fr: "Aqua-Canon",
			de: "Wasserkanone",
			it: "Cannone Acquatico",
			es: "Cañón Aqua",
			pt: "Aqua Canhão"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card
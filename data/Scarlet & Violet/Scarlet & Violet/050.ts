import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [693],
	set: Set,

	name: {
		en: "Clawitzer",
		fr: "Gamblast",
		es: "Clawitzer",
		it: "Clawitzer",
		pt: "Clawitzer",
		de: "Wummer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
		es: "Clauncher",
		it: "Clauncher",
		pt: "Clauncher",
		de: "Scampisto"
	},


	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Aqua Cannon",
			fr: "Aqua-Canon",
			es: "Cañón Aqua",
			it: "Cannone Acquatico",
			pt: "Aqua Canhão",
			de: "Wasserkanone"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Souichirou Gunjima",

	thirdParty: {
        cardmarket: 702345,
        tcgplayer: 487897
    }
}

export default card
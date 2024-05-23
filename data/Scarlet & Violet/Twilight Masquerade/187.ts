import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Lucky Attachment",
			fr: "Attache Chanceuse",
			es: "Unión Afortunada",
			it: "Assegnazione Fortunata",
			pt: "Ligação Sortuda",
			de: "Glücksanlage"
		},

		effect: {
			en: "Attach a Basic Energy card from your hand to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie de base de votre main à l'un de vos Pokémon.",
			es: "Une 1 carta de Energía Básica de tu mano a uno de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon una carta Energia base dalla tua mano.",
			pt: "Ligue uma carta de Energia Básica da sua mão a 1 dos seus Pokémon.",
			de: "Lege 1 Basis-Energiekarte aus deiner Hand an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Boundless Power",
			fr: "Puissance Illimitée",
			es: "Poder Ilimitado",
			it: "Potere Incontenibile",
			pt: "Poder Ilimitado",
			de: "Unbegrenzte Kraft"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
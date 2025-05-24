import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Ceruledge",
		fr: "Malvalame",
		es: "Ceruledge",
		it: "Ceruledge",
		pt: "Ceruledge",
		de: "Azugladis"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Cursed Edge",
			fr: "Lame Maudite",
			es: "Filo Maldito",
			it: "Lama Maledetta",
			pt: "Gume Amaldiçoado",
			de: "Fluchklinge"
		},

		effect: {
			en: "Discard all Special Energy from all of your opponent's Pokémon.",
			fr: "Défaussez toutes les Énergies spéciales de tous les Pokémon de votre adversaire.",
			es: "Descarta todas las Energías Especiales de todos los Pokémon de tu rival.",
			it: "Scarta tutte le Energie speciali dai Pokémon del tuo avversario.",
			pt: "Descarte todas as Energias Especiais de todos os Pokémon do seu oponente.",
			de: "Lege alle Spezial-Energien von allen Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Black Blaze Slash",
			fr: "Tranche Brasier Sombre",
			es: "Tajo Ígneo Oscuro",
			it: "Lacerafiamma Nera",
			pt: "Talho de Chamas Negras",
			de: "Schwarzfeuerstich"
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
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Rond"
}

export default card

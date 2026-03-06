import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
		es: "Tapu Koko",
		'es-mx': "Tapu Koko",
		de: "Kapu-Riki",
		it: "Tapu Koko",
		pt: "Tapu Koko"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Fast Flight",
			fr: "Envol Soudain",
			es: "Vuelo Veloz",
			'es-mx': "Vuelo Veloz",
			de: "Rasanter Flug",
			it: "Volo Rapido",
			pt: "Voo Rápido"
		},

		effect: {
			en: "If you go first, you can use this attack during your first turn. Discard your hand and draw 5 cards.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Défaussez votre main et piochez 5 cartes.",
			es: "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Descarta las cartas de tu mano y roba 5 cartas.",
			'es-mx': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Descarta tu mano y roba 5 cartas.",
			de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Lege deine Handkarten auf deinen Ablagestapel und ziehe 5 Karten.",
			it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Scarta le carte che hai in mano e pesca cinque carte.",
			pt: "Se você for o primeiro a jogar, poderá usar este ataque durante o seu primeiro turno. Descarte a sua mão e compre 5 cartas."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunder Blast",
			fr: "Grondement de Tonnerre",
			es: "Estallido Trueno",
			'es-mx': "Explosión Atronadora",
			de: "Donnerkeil",
			it: "Tuonobomba",
			pt: "Explosão de Trovões"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675879,
		cardmarket: 869678
	}
}

export default card
import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tapu Koko",
		'fr-fr': "Tokorico",
		'es-es': "Tapu Koko",
		'es-mx': "Tapu Koko",
		'de-de': "Kapu-Riki",
		'it-it': "Tapu Koko",
		'pt-br': "Tapu Koko"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [785],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Fast Flight",
			'fr-fr': "Envol Soudain",
			'es-es': "Vuelo Veloz",
			'es-mx': "Vuelo Veloz",
			'de-de': "Rasanter Flug",
			'it-it': "Volo Rapido",
			'pt-br': "Voo Rápido"
		},

		effect: {
			'en-us': "If you go first, you can use this attack during your first turn. Discard your hand and draw 5 cards.",
			'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Défaussez votre main et piochez 5 cartes.",
			'es-es': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Descarta las cartas de tu mano y roba 5 cartas.",
			'es-mx': "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Descarta tu mano y roba 5 cartas.",
			'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Lege deine Handkarten auf deinen Ablagestapel und ziehe 5 Karten.",
			'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Scarta le carte che hai in mano e pesca cinque carte.",
			'pt-br': "Se você for o primeiro a jogar, poderá usar este ataque durante o seu primeiro turno. Descarte a sua mão e compre 5 cartas."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunder Blast",
			'fr-fr': "Grondement de Tonnerre",
			'es-es': "Estallido Trueno",
			'es-mx': "Explosión Atronadora",
			'de-de': "Donnerkeil",
			'it-it': "Tuonobomba",
			'pt-br': "Explosão de Trovões"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Although it’s called a guardian deity, if a person or Pokémon puts it in a bad mood, it will become a malevolent deity and attack.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869678,
			tcgplayer: 675879
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870244,
			tcgplayer: 676906
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870243,
			tcgplayer: 677046
		}
	},
],
}

export default card

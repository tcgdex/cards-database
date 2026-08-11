import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [916],
	set: Set,

	name: {
		'en-us': "Oinkologne",
		'fr-fr': "Fragroin",
		'es-es': "Oinkologne",
		'it-it': "Oinkologne",
		'pt-br': "Oinkologne",
		'de-de': "Fragrunz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Lechonk",
		'fr-fr': "Gourmelet"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Leg Stomp",
			'fr-fr': "Jambes Lourdes",
			'es-es': "Patada Pisotón",
			'it-it': "Artopestone",
			'pt-br': "Pisoteada de Pernas",
			'de-de': "Beinstampfer"
		},

		effect: {
			'en-us': "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			'fr-fr': "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			'it-it': "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "kirisAki",

	description: {
		'en-us': "Oinkologne is proud of its fine, glossy skin. It emits a concentrated scent from the tip of its tail.",
	},

	thirdParty: {
        cardmarket: 702453,
        tcgplayer: 488052
    }
}

export default card
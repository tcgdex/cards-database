import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Blastoise V",
		'fr-fr': "Tortank V",
		'de-de': "Turtok V",
		'es-es': "Blastoise V",
		'pt-br': "Blastoise V",
		'it-it': "Blastoise V"
	},

	rarity: "Promo",
	dexId: [9],
	hp: 220,
	types: ["Water"],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'de-de': "Aquaknarre",
			'es-es': "Pistola Agua",
			'pt-br': "Revólver d'Água",
			'it-it': "Pistolacqua"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Torrential Cannon",
			'fr-fr': "Canon Torrentiel",
			'de-de': "Sintflutkanone",
			'es-es': "Cañón Torrencial",
			'pt-br': "Canhão Torrencial",
			'it-it': "Cannone Torrenziale"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Torrential Cannon.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Canon Torrentiel.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Sintflutkanone nicht einsetzen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Cañón Torrencial.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Canhão Torrencial.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Cannone Torrenziale."
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
	suffix: "V",

	thirdParty: {
		cardmarket: 538773
	}
}

export default card

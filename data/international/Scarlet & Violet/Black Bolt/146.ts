import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [611],
	set: Set,

	name: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'de-de': "Sharfax",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'es-es': "Fraxure",
		'es-mx': "Fraxure"
	},

	illustrator: "Yuya Oka",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'de-de': "Milza",
		'it-it': "Axew",
		'pt-br': "Axew",
		'es-es': "Axew",
		'es-mx': "Axew"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'es-es': "Mordisco",
			'es-mx': "Mordida"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			'en-us': "Boundless Power",
			'fr-fr': "Puissance Illimitée",
			'de-de': "Unbegrenzte Kraft",
			'it-it': "Potere Incontenibile",
			'pt-br': "Poder Ilimitado",
			'es-es': "Poder Ilimitado",
			'es-mx': "Poder Ilimitado"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar ataques.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836215,
				tcgplayer: 642600
			}
		},
	]
}

export default card

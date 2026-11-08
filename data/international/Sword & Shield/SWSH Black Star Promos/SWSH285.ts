import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'fr-fr': "Pikachu V",
		'de-de': "Pikachu V",
		'es-es': "Pikachu V",
		'pt-br': "Pikachu V",
		'it-it': "Pikachu V",
		'en-us': "Pikachu V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Pika Propulsion",
			'de-de': "Pika-Antrieb",
			'es-es': "Pika Impulso",
			'pt-br': "Impulso Pikachu",
			'it-it': "Pika-Impulso",
			'en-us': "Pika Drive"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'en-us': "During your next turn, this Pokémon can't attack."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 461594,
		tcgplayer: 478423
	}
}

export default card

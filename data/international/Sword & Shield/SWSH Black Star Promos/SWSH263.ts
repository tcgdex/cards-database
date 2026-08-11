import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'fr-fr': "Zeraora V",
		'de-de': "Zeraora V",
		'es-es': "Zeraora V",
		'pt-br': "Zeraora V",
		'it-it': "Zeraora V",
		'en-us': "Zeraora V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'fr-fr': "Tranch'Griffe",
			'de-de': "Klauenschlitzer",
			'es-es': "Cuchillada Garra",
			'pt-br': "Golpe de Garra",
			'it-it': "Lacerartiglio",
			'en-us': "Claw Slash"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Éclair du Tonnerre",
			'de-de': "Donnernder Einschlag",
			'es-es': "Rayo Atronador",
			'pt-br': "Raio Estrondoso",
			'it-it': "Fulmine Tonante",
			'en-us': "Thunderous Bolt"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'en-us': "During your next turn, this Pokémon can't attack."
		},

		damage: 190
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
		cardmarket: 669838
	}
}

export default card

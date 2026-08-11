import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [286],
	set: Set,

	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'es-es': "Breloom",
		'it-it': "Breloom",
		'pt-br': "Breloom",
		'de-de': "Kapilz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'es-es': "Shroomish",
		'it-it': "Shroomish",
		'pt-br': "Shroomish",
		'de-de': "Knilz"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Yukiko Baba",

	description: {
		'en-us': "It scatters poisonous spores and throws powerful punches while its foe is hampered by inhaled spores."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'de-de': "Kopfnuss",
			'es-es': "Golpe Cabeza",
			'pt-br': "Cabeçada",
			'it-it': "Bottintesta"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Impact Blow",
			'fr-fr': "Coup à Impact",
			'de-de': "Einschlag",
			'es-es': "Golpe Impactante",
			'pt-br': "Golpe Impactante",
			'it-it': "Colpoimpatto"
		},

		damage: 150,

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Impact Blow.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup à Impact.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Einschlag nicht einsetzen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Impactante.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoimpatto."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582033,
				tcgplayer: 253075
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582033,
				tcgplayer: 253075
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'es-mx': "Riolu",
		'de-de': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu"
	},

	illustrator: "hncl",
	rarity: "Common",
	category: "Pokemon",
	dexId: [447],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Accelerating Stab",
			'fr-fr': "Poignard Accélérateur",
			'es-es': "Puñalada Aceleradora",
			'es-mx': "Cuchillada Aceleradora",
			'de-de': "Beschleunigter Stich",
			'it-it': "Pugnalata Rapida",
			'pt-br': "Estocada Aceleratória"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Accelerating Stab.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Poignard Accélérateur.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Puñalada Aceleradora.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Cuchillada Aceleradora.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Beschleunigter Stich nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Estocada Aceleratória."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "They communicate with one another using their auras. They are able to run all through the night.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869723,
			tcgplayer: 675924
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870316,
			tcgplayer: 676942
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870315,
			tcgplayer: 677082
		}
	},
],
}

export default card

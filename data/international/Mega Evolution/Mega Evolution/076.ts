import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'de-de': "Riolu",
		'it-it': "Riolu",
		'es-es': "Riolu",
		'pt-br': "Riolu",
		'es-mx': "Riolu"
	},

	illustrator: "hncl",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [447],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Accelerating Stab",
			'fr-fr': "Poignard Accélérateur",
			'de-de': "Beschleunigter Stich",
			'it-it': "Pugnalata Rapida",
			'es-es': "Puñalada Aceleradora",
			'pt-br': "Estocada Aceleratória",
			'es-mx': "Cuchillada Aceleradora"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Accelerating Stab.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Poignard Accélérateur.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Beschleunigter Stich nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Puñalada Aceleradora.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Estocada Aceleratória.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Cuchillada Aceleradora."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851147,
				tcgplayer: 654415
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851147,
				tcgplayer: 654415
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 862195,
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'de-de': "Riolu",
		'it-it': "Riolu",
		'es-es': "Riolu",
		'pt-br': "Riolu"
	},

	illustrator: "GOSSAN",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [447],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Accelerating Stab",
			'fr-fr': "Coup de Poing Accéléré",
			'de-de': "Beschleunigter Stich",
			'it-it': "Pugnalata Rapida",
			'es-es': "Puñalada Acelerada",
			'pt-br': "Facada Acelerada"
		},

		damage: 30,

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Accelerating Stab.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup de Poing Accéléré.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Beschleunigter Stich nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Puñalada Acelerada.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Facada Acelerada."
		}
	}],

	retreat: 2,
	regulationMark: "I",

	weaknesses: [{
		type: "Psychic",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851058,
				tcgplayer: 656260
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 851059,
				tcgplayer: 656262
			}
		},
	],
}

export default card


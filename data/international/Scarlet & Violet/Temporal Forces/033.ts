import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [726],
	set: Set,

	name: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
		'es-es': "Torracat",
		'it-it': "Torracat",
		'pt-br': "Torracat",
		'de-de': "Miezunder"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
		'es-es': "Litten",
		'it-it': "Litten",
		'pt-br': "Litten",
		'de-de': "Flamiau"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flare Strike",
			'fr-fr': "Attaque Flamboyante",
			'es-es': "Impacto Ígneo",
			'it-it': "Colpo Fiammante",
			'pt-br': "Golpe de Chamas",
			'de-de': "Feuergeschoss"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Flare Strike.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Attaque Flamboyante.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Impacto Ígneo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Fiammante.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe de Chamas.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Feuergeschoss nicht einsetzen."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "In the midst of battle, the fire pouch on Torracat's neck rings like a bell and produces stronger flames than usual.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760663,
				tcgplayer: 542777
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760663,
				tcgplayer: 542777
			}
		},
	],

	illustrator: "Saya Tsuruta",

}

export default card
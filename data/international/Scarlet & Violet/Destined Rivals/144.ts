import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [375],
	set: Set,

	name: {
		'en-us': "Steven's Metang",
		'fr-fr': "Métang de Pierre",
		'de-de': "Troys Metang",
		'it-it': "Metang di Rocco",
		'es-es': "Metang de Máximo",
		'pt-br': "Metang do Steven",
		'es-mx': "Metang de Steven"
	},


	illustrator: "Anesaki Dynamic",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Steven's Beldum",
		'fr-fr': "Terhal de Pierre",
		'de-de': "Troys Tanhel",
		'it-it': "Beldum di Rocco",
		'es-es': "Beldum de Máximo",
		'pt-br': "Beldum do Steven",
		'es-mx': "Beldum de Steven"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Metal Slash",
			'fr-fr': "Tranche Métallique",
			'de-de': "Metallschlitzer",
			'it-it': "Lacerametallo",
			'es-es': "Tajo Metálico",
			'pt-br': "Talho de Metal",
			'es-mx': "Cuchillada Metálica"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826018,
				tcgplayer: 632951
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826018,
				tcgplayer: 632951
			}
		},
	],
}

export default card

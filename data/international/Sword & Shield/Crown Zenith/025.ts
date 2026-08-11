import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [637],
	set: Set,

	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'es-es': "Volcarona",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'de-de': "Ramoth"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo",
			'de-de': "Irrlicht"
		},

		damage: 40
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Volcanic Heat",
			'fr-fr': "Chaleur Volcanique",
			'es-es': "Calor Volcánico",
			'it-it': "Calore Vulcanico",
			'pt-br': "Calor Vulcânico",
			'de-de': "Vulkanhitze"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Volcarona scatters burning scales. Some say it does this to start fires. Others say it's trying to rescue those that suffer in the cold.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691742,
				tcgplayer: 478120
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691742,
				tcgplayer: 478120
			}
		},
	],
}

export default card

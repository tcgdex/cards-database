import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [814],
	set: Set,

	name: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'es-es': "Raboot",
		'it-it': "Raboot",
		'pt-br': "Raboot",
		'de-de': "Kickerlo"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Scorbunny",
		'fr-fr': "Flambino",
		'es-es': "Scorbunny",
		'it-it': "Scorbunny",
		'pt-br': "Scorbunny",
		'de-de': "Hopplo"
	},

	attacks: [{
		name: {
			'en-us': "Volley Kick",
			'fr-fr': "Reprise de Volée",
			'es-es': "Patada Volea",
			'it-it': "Calciata al Volo",
			'pt-br': "Voleio",
			'de-de': "Volleyschuss"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 60,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567107,
				tcgplayer: 241680
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567107,
				tcgplayer: 241680
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [668],
	set: Set,

	name: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
		'es-es': "Pyroar",
		'pt-br': "Pyroar",
		'it-it': "Pyroar",
		'de-de': "Pyroleo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'pt-br': "Litleo",
		'it-it': "Litleo",
		'de-de': "Leufeo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Fire Mane",
			'fr-fr': "Crinière de Feu",
			'es-es': "Crin de Fuego",
			'pt-br': "Crina de Fogo",
			'it-it': "Criniera di Fuoco",
			'de-de': "Flammenmähne"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Flame Tackle",
			'fr-fr': "Charge Calcinante",
			'es-es': "Placaje Ígneo",
			'pt-br': "Investida Flamejante",
			'it-it': "Fiammazione",
			'de-de': "Flammentackle"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Takeshi Nakamura",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805405,
				tcgplayer: 610371
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805405,
				tcgplayer: 610371
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806430,
				tcgplayer: 610547
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806431,
				tcgplayer: 610648
			}
		},
	],
}

export default card

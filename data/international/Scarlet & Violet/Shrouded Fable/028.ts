import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [42],
	set: Set,

	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Speed Dive",
			'fr-fr': "Plongée Rapide",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Pitch-Black Blade",
			'fr-fr': "Lame Fuligineuse",
			'es-es': "Tajo Oscuridad",
			'it-it': "Lama Buiopesto",
			'pt-br': "Lâmina do Breu",
			'de-de': "Pechschwarze Klinge"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Teeziro",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780923,
				tcgplayer: 560338
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780923,
				tcgplayer: 560338
			}
		},
	],
}

export default card

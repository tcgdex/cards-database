import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo",
		'es-es': "Sharpedo",
		'it-it': "Sharpedo",
		'pt-br': "Sharpedo",
		'de-de': "Tohaido"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Kazuma Koda",

	attacks: [{
		name: {
			'en-us': "Taunt",
			'fr-fr': "Provoc",
			'es-es': "Mofa",
			'it-it': "Provocazione",
			'pt-br': "Taunt",
			'de-de': "Verhöhner"
		},

		effect: {
			'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			'pt-br': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Jet Bite",
			'fr-fr': "Impact Mordant",
			'es-es': "Turbomordisco",
			'it-it': "Morso Jet",
			'pt-br': "Jet Bite",
			'de-de': "Rasanter Biss"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "During your next turn, this Pokémon can't attack.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'es-es': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
		'de-de': "Kanivanha"
	},

	description: {
		'en-us': "It drinks in seawater and jets it from its rear to propel itself. It's very sensitive to the scent of blood."
	},

	dexId: [319],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574060,
				tcgplayer: 246844
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574060,
				tcgplayer: 246844
			}
		},
	],
}

export default card

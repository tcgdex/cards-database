import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [638],
	set: Set,

	name: {
		'en-us': "Cobalion",
		'fr-fr': "Cobaltium",
		'es-es': "Cobalion",
		'it-it': "Cobalion",
		'pt-br': "Cobalion",
		'de-de': "Kobalium"
	},

	illustrator: "Kazuma Koda",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Headbang",
			'fr-fr': "Frappe de Tête",
			'es-es': "Cabecear",
			'it-it': "Scuotitesta",
			'pt-br': "Baque de Cabeça",
			'de-de': "Headbangen"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'en-us': "Metal Slash",
			'fr-fr': "Tranche Métallique",
			'es-es': "Tajo Metálico",
			'it-it': "Lacerametallo",
			'pt-br': "Talho de Metal",
			'de-de': "Metallschlitzer"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It has a body and heart of steel. It worked with its allies to punish people when they hurt Pokémon."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567222,
				tcgplayer: 241791
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567222,
				tcgplayer: 241791
			}
		},
	],
}

export default card

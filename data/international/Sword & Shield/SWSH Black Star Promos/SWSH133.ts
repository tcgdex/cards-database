import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'en-us': "Lance's Charizard V",
		'fr-fr': "Dracaufeu V de Peter",
		'de-de': "Siegfrieds Glurak V",
		'es-es': "Charizard V de Lance",
		'pt-br': "Charizard V do Lance",
		'it-it': "Charizard V di Lance"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Promo",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Flamethrower",
			'fr-fr': "Lance-Flammes",
			'de-de': "Flammenwurf",
			'es-es': "Lanzallamas",
			'pt-br': "Lança-chamas",
			'it-it': "Lanciafiamme"
		},

		damage: 200,

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon."
		}
	}],

	regulationMark: "E",
	suffix: "V",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 220,
	types: ["Fire"],
	retreat: 3,

	thirdParty: {
		cardmarket: 576732,
		tcgplayer: 251089
	}
}

export default card

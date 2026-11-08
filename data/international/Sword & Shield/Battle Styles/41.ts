import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [592],
	set: Set,

	name: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
		'es-es': "Frillish",
		'it-it': "Frillish",
		'pt-br': "Frillish",
		'de-de': "Quabbel"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Recover",
			'fr-fr': "Soin",
			'es-es': "Recuperación",
			'it-it': "Ripresa",
			'pt-br': "Recuperação",
			'de-de': "Genesung"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon and heal all damage from it.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon, puis soignez tous les dégâts de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon y cura todos sus puntos de daño.",
			'it-it': "Scarta un'Energia da questo Pokémon e curalo da tutti i danni.",
			'pt-br': "Descarte 1 Energia deste Pokémon e cure todo o dano dele.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel und heile bei ihm allen Schaden."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Legend has it that the residents of a sunken ancient city changed into these Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545316,
				tcgplayer: 234183
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545316,
				tcgplayer: 234183
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		'en-us': "Koraidon",
		'fr-fr': "Koraidon",
		'es-es': "Koraidon",
		'it-it': "Koraidon",
		'pt-br': "Koraidon",
		'de-de': "Koraidon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 70
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Rampaging Fang",
			'fr-fr': "Croc Furieux",
			'es-es': "Colmillo Furioso",
			'it-it': "Zanna Infuriata",
			'pt-br': "Canino Feroz",
			'de-de': "Tobende Fänge"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon.",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
			'es-es': "Descarta 3 Energías de este Pokémon.",
			'it-it': "Scarta tre Energie da questo Pokémon.",
			'pt-br': "Descarte 3 Energias deste Pokémon.",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	illustrator: "Mina Nakai",
	description: {
		'en-us': "This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 692235,
				tcgplayer: 490721
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 692236,
				tcgplayer: 490725
			},
		}
	],
}

export default card

import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [432],
	set: Set,

	name: {
		'en-us': "Purugly",
		'fr-fr': "Chaffreux",
		'es-es': "Purugly",
		'it-it': "Purugly",
		'pt-br': "Purugly",
		'de-de': "Shnurgarst"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'es-es': "Glameow",
		'it-it': "Glameow",
		'pt-br': "Glameow",
		'de-de': "Charmian"
	},

	attacks: [{
		name: {
			'en-us': "Caturday",
			'fr-fr': "Chamedi",
			'es-es': "Sábado Gatuno",
			'it-it': "Giornogatto",
			'pt-br': "Dia de Gato",
			'de-de': "Schnurrtag"
		},

		effect: {
			'en-us': "Draw 3 cards. If you do, this Pokémon is now Asleep.",
			'fr-fr': "Piochez 3 cartes. Dans ce cas, ce Pokémon est maintenant Endormi.",
			'es-es': "Roba 3 cartas. Si lo haces, este Pokémon pasa a estar Dormido.",
			'it-it': "Pesca tre carte. Se lo fai, questo Pokémon viene addormentato.",
			'pt-br': "Compre 3 cartas. Se fizer isto, este Pokémon ficará Adormecido.",
			'de-de': "Ziehe 3 Karten. Wenn du das machst, schläft dieses Pokémon jetzt."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545681,
				tcgplayer: 234158
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545681,
				tcgplayer: 234158
			}
		},
	],
}

export default card

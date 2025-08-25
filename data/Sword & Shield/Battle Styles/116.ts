import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [432],
	set: Set,

	name: {
		en: "Purugly",
		fr: "Chaffreux",
		es: "Purugly",
		it: "Purugly",
		pt: "Purugly",
		de: "Shnurgarst"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
		es: "Glameow",
		it: "Glameow",
		pt: "Glameow",
		de: "Charmian"
	},

	attacks: [{
		name: {
			en: "Caturday",
			fr: "Chamedi",
			es: "Sábado Gatuno",
			it: "Giornogatto",
			pt: "Dia de Gato",
			de: "Schnurrtag"
		},

		effect: {
			en: "Draw 3 cards. If you do, this Pokémon is now Asleep.",
			fr: "Piochez 3 cartes. Dans ce cas, ce Pokémon est maintenant Endormi.",
			es: "Roba 3 cartas. Si lo haces, este Pokémon pasa a estar Dormido.",
			it: "Pesca tre carte. Se lo fai, questo Pokémon viene addormentato.",
			pt: "Compre 3 cartas. Se fizer isto, este Pokémon ficará Adormecido.",
			de: "Ziehe 3 Karten. Wenn du das machst, schläft dieses Pokémon jetzt."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails."
	},

	thirdParty: {
		cardmarket: 545681,
		tcgplayer: 234158
	}
}

export default card

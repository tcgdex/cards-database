import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		en: "Houndoom",
		fr: "Démolosse",
		es: "Houndoom",
		it: "Houndoom",
		pt: "Houndoom",
		de: "Hundemon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fire Blast",
			fr: "Déflagration",
			es: "Llamarada",
			it: "Fuocobomba",
			pt: "Rajada de Fogo",
			de: "Feuersturm"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
    {
      type: "reverse",
      size: "standard"
    },
    {
      type: "normal",
      size: "standard"
    }
  ],

	illustrator: "hncl",

	description: {
		en: "Upon hearing its eerie howls, other Pokémon get the shivers and head straight back to their nests.",
	},

	thirdParty: {
        cardmarket: 702330,
        tcgplayer: 487874
    }
}

export default card
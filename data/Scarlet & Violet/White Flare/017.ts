import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [608],
	set: Set,

	name: {
		en: "Lampent",
		fr: "Mélancolux",
		de: "Laternecto",
		it: "Lampent",
		pt: "Lampent",
		es: "Lampent",
		'es-mx': "Lampent"
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
		de: "Lichtel",
		it: "Litwick",
		pt: "Litwick",
		es: "Litwick",
		'es-mx': "Litwick"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Blast",
			fr: "Déflagration",
			de: "Feuersturm",
			it: "Fuocobomba",
			pt: "Rajada de Fogo",
			es: "Llamarada",
			'es-mx': "Llamarada"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835933,
				tcgplayer: 642465
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835933,
				tcgplayer: 642465
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836523,
				tcgplayer: 642710
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836524,
				tcgplayer: 642638
			}
		},
	],
}

export default card
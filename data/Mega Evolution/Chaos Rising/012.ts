import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Braixen",
		fr: "Roussil",
		es: "Braixen",
		'es-mx': "Braixen",
		de: "Rutena",
		it: "Braixen",
		pt: "Braixen"
	},

	illustrator: "Taiga Kasai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [654],
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Fennekin"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
			es: "Lanzallamas",
			'es-mx': "Lanzallamas",
			de: "Flammenwurf",
			it: "Lanciafiamme",
			pt: "Lança-chamas"
		},

		cost: ["Fire", "Fire"],
		damage: 80,

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693457,
		cardmarket: 886404
	}
}

export default card
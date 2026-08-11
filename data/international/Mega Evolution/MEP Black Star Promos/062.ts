import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Chochodile",
		en: "Fuecoco",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",
	dexId: [909],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
			es: "Lanzallamas",
			'es-mx': "Lanzallamas",
			de: "Flammenwurf",
			it: "Lanciafiamme",
			pt: "Lança-chamas"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon."
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 891893
			}
		},
	],
}

export default card

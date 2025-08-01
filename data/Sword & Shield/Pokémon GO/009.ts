import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
			es: "Lanzallamas",
			it: "Lanciafiamme",
			pt: "Lança-chamas",
			de: "Flammenwurf"
		},

		effect: {
			en: "Discard a Fire Energy from this Pokémon.",
			fr: "Défaussez une Énergie Fire de ce Pokémon.",
			es: "Descarta 1 Energía Fire de este Pokémon.",
			it: "Scarta un'Energia Fire da questo Pokémon.",
			pt: "Descarte 1 Energia Fire deste Pokémon.",
			de: "Lege 1 Fire-Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 664543
	}
}

export default card
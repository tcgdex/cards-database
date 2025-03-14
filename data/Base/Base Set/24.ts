import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Charmeleon",
		pt: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
		pt: "Charmander",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				pt: "Talho",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				pt: "Lança-Chamas",
				fr: "Lance-flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard 1 Energy card attached to Charmeleon in order to use this attack.",
				pt: "Descarte 1 Energia de fogo liagada ao Charmeleon para usar este ataque.",
				fr: "Défaussez 1 carte Énergie  attachée à Reptincel pour pouvoir utiliser cette attaque.",
				de: "Entferne eine auf Glutexo abgelegte  Energiekarte, um diesen Angriff auszuführen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "En agitant sa queue, il peut élever le niveau de la température à un degré incroyable.",
		pt: "Quando abana a sua cauda incandescente, ele eleva a temperatura a níveis insuportáveis."
	}
}

export default card

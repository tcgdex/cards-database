import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Pikachu Libre)'

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

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
		es: "Glameow",
		it: "Glameow",
		pt: "Glameow",
		de: "Charmian"
	},

	stage: "Stage1",
	retreat: 2,

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Tranche",
			},
			damage: "30",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Charge Miaou",
			},
			damage: "40+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
	],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118825
	}
}

export default card
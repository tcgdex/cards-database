import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [465],
	set: Set,

	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		es: "Tangrowth",
		it: "Tangrowth",
		pt: "Tangrowth",
		de: "Tangoloss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
		es: "Tangela",
		it: "Tangela",
		pt: "Tangela",
		de: "Tangela"
	},

	stage: "Stage1",
	retreat: 4,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Générateur Solaire",
			},
			effect: {
				fr: "Cherchez jusqu'à 2 cartes Énergie spéciale dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Asticotage",
			},
			damage: "20+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
		},
	],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98333
	}
}

export default card
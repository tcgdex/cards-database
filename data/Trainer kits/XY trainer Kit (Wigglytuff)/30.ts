import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Wigglytuff)'

const card: Card = {
	dexId: [40],
	set: Set,

	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fairy"],

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},

	stage: "Stage1",
	retreat: 2,

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				fr: "Piqûre Infernale",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Griffe Acier",
			},
			damage: "70",
		},
	],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98206
	}
}

export default card
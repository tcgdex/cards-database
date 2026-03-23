import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [733],
	set: Set,

	name: {
		en: "Toucannon",
		fr: "Bazoucan",
		es: "Toucannon",
		it: "Toucannon",
		pt: "Toucannon",
		de: "Tukanon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Trumbeak",
		fr: "Piclairon",
		es: "Trumbeak",
		it: "Trumbeak",
		pt: "Trumbeak",
		de: "Trompeck"
	},

	stage: "Stage2",
	retreat: 2,

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Écho",
			},
			damage: "60",
			effect: {
				fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Bec-Canon",
			},
			damage: "100",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire et maintenant Brûlé.",
			},
		},
	],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 152848
	}
}

export default card
import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Helping Hand",
				fr: "Coup d'Main",
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à 1 de vos Pokémon de Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Cotton Guard",
				fr: "Cotogarde",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 279976,
		tcgplayer: 90567
	}
}

export default card

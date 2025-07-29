import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		600,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Klink",
		fr: "Tic",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Sound",
				fr: "Strido-Son",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280040
	}
}

export default card

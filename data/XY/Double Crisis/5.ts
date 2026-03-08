import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Walrein",
		fr: "Kaimorse de la Team Aqua",
		pt: "Walrein da Equipe Aqua",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Team Aqua's Sealeo",
		fr: "Phogleur de la Team Aqua",
		pt: "Sealeo da Equipe Aqua",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Blow",
				fr: "Coup Puissant",
				pt: "Golpe Poderoso",
			},
			effect: {
				en: "This attack does 30 damage times the amount of Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon.",
				pt: "Esse ataque causa 30 de danos vezes a quantidade de Energia ligada a este Pokémon",
			},
			damage: "30×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dual Blizzard",
				fr: "Double Blizzard",
				pt: "Nevasca Dupla",
			},
			effect: {
				en: "Discard 2 Water Energy attached to this Pokémon. This attack does 80 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Water attachées à ce Pokémon. Cette attaque inflige 80 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				pt: "Descarte 2 Energias de Água ligadas a este Pokémon. Este ataque causa 80 de danos a 2 dos Pokémon de seu oponente. (Não aplique Fraqueza ou Resistência a Pokémon no Banco.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 282516,
		tcgplayer: 97051
	}
}

export default card

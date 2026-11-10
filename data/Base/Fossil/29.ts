import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		it: "Raichu",
		de: "Raichu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		it: "Pikachu",
		de: "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Gigashock",
				fr: "Éléctrochok",
				it: "Superscossa",
				de: "Gigaschock"
			},
			effect: {
				en: "Choose 3 of your opponent's Benched Pokémon and this attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) If your opponent has fewer than 3 Benched Pokémon, do the damage to each of them.",
				fr: "Choisissez 3 Pokémon du Banc de votre adversaire et cette attaque inflige 10 dégâts à chacun d'eux. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Si votre adversaire a moins de 3 Pokémon, infligez les dégâts à chacun d'eux.",
				it: "Scegli 3 Pokémon dalla Panchina del tuo avversario e questo attacco infligge 10 danni a ognuno di loro (non applicare Debolezza e Resistenza ai Pokémon in Panchina). Se il tuo avversario ha meno di 3 Pokémon in Panchina infliggi il danno a ognuno di loro.",
				de: "Wähle drei Pokémon auf der Bank deines Gegners. Dieser Angriff fügt jedem von ihnen 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.) Falls dein Gegner weniger als drei Pokémon auf der Bank hat, teile die Schadenspunkte an jedes von ihnen aus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Its long tail serves as a ground to protect itself from its own high voltage power.",
		fr: "Il doit garder sa queue en contact avec le sol pour éviter toute électrocution.",
		it: "Ha una coda molto lunga che gli serve da messa a terra per proteggersi dalle scariche ad alta tensione che emana il suo corpo.",
		de: "Sein langer Schweif dient ihm als Erdung zum Schutz vor seiner eigenen Hochspannung."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273890,
				tcgplayer: 106531
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273890,
				tcgplayer: 106531
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273890,
				tcgplayer: 106531
			}
		},
	],
}

export default card

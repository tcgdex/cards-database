import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fainting Spell",
				fr: "Sort évanouissement",
			},
			effect: {
				en: "Once during your opponent's turn, if Gengar would be Knocked Out by damage from an attack, you may flip a coin. If heads, the Defending Pokémon is Knocked Out.",
				fr: "Une seule fois lors du tour de votre adversaire, si Ectoplasma est mis K.O par des dégâts d'une attaque, vous pouvez lancer une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Room",
				fr: "Pièce-ombre",
			},
			effect: {
				en: "Put 3 damage counters on 1 of your opponent's Pokémon. If that Pokémon has any Poké-Powers, put 6 damage counters on that Pokémon instead.",
				fr: "Placez 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Si ce Pokémon possède des Poké-Powers, placez 6 marqueurs de dégât sur ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
			},
			effect: {
				en: "Look at your opponent's hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent's hand.",
				fr: "Regardez la main de votre adversaire. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Dresseur, Supporter et Stade dans la main de votre adversaire.",
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card

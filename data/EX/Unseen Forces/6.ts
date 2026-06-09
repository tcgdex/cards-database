import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
		de: "Forstellka"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiky Shell",
				fr: "Coquille pointue",
				de: "Spiky Shell"
			},
			effect: {
				en: "Put 3 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
				fr: "Placez 3 marqueurs de dégât sur le Pokémon Défenseur à la fin du prochain tour de votre adversaire.",
				de: "Put 3 damage counters on the Defending Pokémon at the end of your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pop",
				fr: "Pan!",
				de: "Pop"
			},
			effect: {
				en: "Put 7 damage counters on Forretress. Move all Energy cards attached to Forretress to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)",
				fr: "Placez 7 marqueurs de dégât sur Foretress. Déplacez toutes les cartes Énergie attachées à Foretress sur vos Pokémon de Banc, de la façon que vous voulez. (Ignorez cet effet si vous n'avez pas de Pokémon de Banc.)",
				de: "Put 7 damage counters on Forretress. Move all Energy cards attached to Forretress to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)"
			},
			damage: 100,

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
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276652,
		tcgplayer: 85548
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card

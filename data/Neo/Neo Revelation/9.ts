import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
		de: "Papungha"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Skiploom",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Evolutionary Spore",
				fr: "Spore évolutionnaire",
				de: "Evolutionary Spore"
			},
			effect: {
				en: "Choose any number of your Hoppips and Skiplooms. Then, for each Pokémon you chose in this way, you may search your deck for a card that evolves from that Pokémon and attach it to that Pokémon. (This counts as evolving those Pokémon.) Shuffle your deck afterward.",
				fr: "Choisissez dans vos Granivol et Floravol en jeu le nombre de Pokémon désiré. Puis, pour chaque Pokémon choisi, vous pouvez chercher une carte évolution de ce Pokémon dans votre deck et l'attacher à ce Pokémon. (Cela revient à faire évoluer tous ces Pokémon). Mélangez ensuite votre deck.",
				de: "Choose any number of your Hoppips and Skiplooms. Then, for each Pokémon you chose in this way, you may search your deck for a card that evolves from that Pokémon and attach it to that Pokémon. (This counts as evolving those Pokémon.) Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Solarbeam",
				fr: "Lance-Soleil",
				de: "Solarbeam"
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
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il dérive au gré des vents saisonniers et sème ses spores cotonneuses dans le monde entier pour se reproduire."
	},

	thirdParty: {
		cardmarket: 274595
	}
}

export default card

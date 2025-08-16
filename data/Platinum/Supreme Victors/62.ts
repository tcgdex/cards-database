import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
		de: "Bisaknosp"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		2,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Pollen",
				fr: "Pollen évolutif",
				de: "Entwicklungspollen"
			},
			effect: {
				en: "Once during your turn, when you play Ivysaur from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent's Active Pokémon is now Asleep.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Herbizarre de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser ce pouvoir. Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				de: "Einmal während deines Zuges kannst du, wenn du Bisaknosp von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, diese Poké-Power benutzen. Das Aktive Pokémon deines Gegners schläft jetzt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
				de: "Zerschneider"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278753
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Meganium",
		de: "Meganie"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Leaf Trans",
				fr: "Transfo feuille",
				de: "Blattverteilung"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Grass Energy attached to 1 of your Pokémon to another of your Pokémon. This power can’t be used if Meganium is affected by a Special Condition.",
				fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie Grass attachée à l’un de vos Pokémon sur un autre Pokémon. Ce pouvoir ne peut pas être utilisé si Meganium est affecté par un État spécial.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 -Energie, die an 1 deiner Pokémon angelegt ist, an 1 anderes deiner Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Meganie von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solarbeam",
				fr: "Lance-soleil",
				de: "Solarstrahl"
			},

			damage: 80,

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

	retreat: 2,
	suffix: "Prime",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		cardmarket: 278998,
		tcgplayer: 87294
	}
}

export default card

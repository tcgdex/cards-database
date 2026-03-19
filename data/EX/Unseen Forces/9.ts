import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Meganium",
		de: "Meganie"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Healing Aroma",
				fr: "Arôme guérisseur",
				de: "Healing Aroma"
			},
			effect: {
				en: "As long as Meganium is your Active Pokémon, remove 1 damage counter from each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) between turns.",
				fr: "Tant que Meganium est votre Pokémon Actif, retirez 1 marqueur de dégât à chaque Pokémon (Pokémon-ex exclus) (les vôtres et ceux de votre adversaire) entre deux tours.",
				de: "As long as Meganium is your Active Pokémon, remove 1 damage counter from each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bouncy Move",
				fr: "Mouvement bondissant",
				de: "Bouncy Move"
			},
			effect: {
				en: "You may put up to 5 damage counters on Meganium. If you do, this attack does 50 damage plus 10 more damage for each damage counter you put on Meganium in this way.",
				fr: "Vous pouvez placer jusqu'à 5 marqueurs de dégât sur Meganium. Cette attaque inflige alors 50 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât que vous placez sur Meganium de cette façon.",
				de: "You may put up to 5 damage counters on Meganium. If you do, this attack does 50 damage plus 10 more damage for each damage counter you put on Meganium in this way."
			},
			damage: "50+",

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
			value: "-30"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276655,
		tcgplayer: 87291
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

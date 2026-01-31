import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mightyena ex",
		fr: "Gradhyena ex",
		de: "Magnayen ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyena"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Driving Howl",
				fr: "Hurlement démesuré",
				de: "Vertreibendes Gebrüll"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon and switch it with 1 of your opponent's Benched Pokémon. Your opponent chooses the Benched Pokémon to switch. This power can't be used if Mightyena ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 des Pokémon Défenseurs et l'échanger avec 1 des Pokémon de Banc de votre adversaire. Votre adversaire choisit le Pokémon de Banc à échanger. Ce pouvoir ne peut pas être utilisé si Gradhyena ex est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Verteidigendes Pokémon wählen und es gegen 1 Pokémon auf der Bank deines Gegners austauschen. Dein Gegners entscheidet, welches Pokémon auf seiner Bank ausgetauscht wird. Diese Poké-Power kann nicht benutzt werden, wenn Magnayen ex von einem Speziellen Zustand betroffen wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc aiguisé",
				de: "Scharfe Fänge"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Claws",
				fr: "Hyper griffes",
				de: "Hyperklauen"
			},
			effect: {
				en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué de Niveau 2, cette attaque inflige 50 dégâts plus 40 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon der Phase 2 ist, fügt dieser Angriff 50 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 277071,
		tcgplayer: 87451
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card

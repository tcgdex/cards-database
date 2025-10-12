import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Demolosse",
		de: "Hundemon"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fire Breath",
				fr: "Haleine de feu",
				de: "Feueratem"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Burned. This power can’t be used if Houndoom is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Défenseur est maintenant Brûlé. Ce pouvoir ne peut pas être utilisé si Démolosse est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt. Diese Poké-Power kann nicht benutzt werden, wenn Hundemon von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Clamp",
				fr: "Pince des Ténèbres",
				de: "Dunkler Klammergriff"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 70,

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
			value: "-20"
		},
	],

	retreat: 1,
	suffix: "Prime",

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		cardmarket: 279258,
		tcgplayer: 86210
	}
}

export default card

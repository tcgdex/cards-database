import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Milotic δ",
		fr: "Milobellus δ",
		de: "Milotic"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sharing",
				fr: "Partage",
				de: "Teilen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this power. (The Supporter card remains in your opponent's hand.) You can't use more than 1 Sharing Poké-Power each turn. This power can't be used if Milotic is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder la main de votre adversaire. Vous pouvez utiliser l'effet d'une carte Supporter s'y trouvant comme l'effet de ce pouvoir. (La carte Supporter reste dans la main de votre adversaire.) Vous ne pouvez pas utiliser plus d'1 Poké-Power Partage par tour. Ce pouvoir ne peut pas être utilisé si Milobellus est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir die Handkarten deines Gegners anschauen. Falls du dort eine Unterstützerkarte findest, kannst du ihren Effekt als Effekt dieser Poké-Power nutzen. (Die Unterstützerkarte bleibt auf der Hand deines Gegners.) Du kannst nicht mehr als 1 Teilen Poké-Power pro Zug einsetzen. Diese Poké-Power kann nicht benutzt werden, wenn Milotic von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Intimidation",
				de: "Flackern"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277210
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card

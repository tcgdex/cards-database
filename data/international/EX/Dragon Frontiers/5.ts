import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Milotic δ",
		'fr-fr': "Milobellus δ",
		'de-de': "Milotic"
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
		'en-us': "Feebas",
		'fr-fr': "Barpau"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Sharing",
				'fr-fr': "Partage",
				'de-de': "Teilen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this power. (The Supporter card remains in your opponent's hand.) You can't use more than 1 Sharing Poké-Power each turn. This power can't be used if Milotic is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder la main de votre adversaire. Vous pouvez utiliser l'effet d'une carte Supporter s'y trouvant comme l'effet de ce pouvoir. (La carte Supporter reste dans la main de votre adversaire.) Vous ne pouvez pas utiliser plus d'1 Poké-Power Partage par tour. Ce pouvoir ne peut pas être utilisé si Milobellus est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dir die Handkarten deines Gegners anschauen. Falls du dort eine Unterstützerkarte findest, kannst du ihren Effekt als Effekt dieser Poké-Power nutzen. (Die Unterstützerkarte bleibt auf der Hand deines Gegners.) Du kannst nicht mehr als 1 Teilen Poké-Power pro Zug einsetzen. Diese Poké-Power kann nicht benutzt werden, wenn Milotic von einem Speziellen Zustand betroffen ist."
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
				'en-us': "Flare",
				'fr-fr': "Intimidation",
				'de-de': "Flackern"
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

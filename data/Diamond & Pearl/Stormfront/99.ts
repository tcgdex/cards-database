import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		fr: "Raichu LV.X",
	},

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Link Lightning",
				fr: "Éclairs en chaîne",
				de: "Verbindungsblitz"
			},
			effect: {
				en: "Once during your turn, when you put Raichu LV.X onto Raichu and use Voltage Shoot, you may use another attack of Raichu afterward. This power can't be used if Raichu is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Raichu NIV.X sur Raichu et utilisez Coup de voltage, vous pouvez ensuite utiliser une autre attaque de Raichu. Ce pouvoir ne peut pas être utilisé si Raichu est affecté par un État Spécial.",
				de: "Einmal während deines Zuges kannst du, wenn du Raichu LV.X von deiner Hand auf dein Aktives Raichu legst und Stromschuss einsetzt, anschließend einen weiteren Angriff von Raichu einsetzen. Diese Poké-Body kann nicht benutzt werden, wenn Raichu von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Voltage Shoot",
				fr: "Coup de voltage",
				de: "Stromschuss"
			},
			effect: {
				en: "Discard 2 Lightning Energy cards from your hand and choose 1 of your opponent's Pokémon. This attack does 80 to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 cartes Énergie Lightning de votre main et choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Lege 2 -Energiekarten von deiner Hand auf deinen Ablagestapel und wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

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
			type: "Metal",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278306,
		tcgplayer: 88528
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

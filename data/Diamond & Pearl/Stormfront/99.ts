import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
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
			},
			effect: {
				en: "Once during your turn, when you put Raichu LV.X onto Raichu and use Voltage Shoot, you may use another attack of Raichu afterward. This power can't be used if Raichu is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Raichu NIV.X sur Raichu et utilisez Coup de voltage, vous pouvez ensuite utiliser une autre attaque de Raichu. Ce pouvoir ne peut pas être utilisé si Raichu est affecté par un État Spécial.",
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
			},
			effect: {
				en: "Discard 2 Lightning Energy cards from your hand and choose 1 of your opponent's Pokémon. This attack does 80 to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 cartes Énergie Lightning de votre main et choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
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




}

export default card

import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion"
	},
	illustrator: "K.  Hoshiba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Heat Up",
				fr: "Cuisson"
			},
			effect: {
				en: "Once during your turn (before you attack), You may count the total number of Energy cards attached to all of your Pokémon and all of your opponent's Pokémon. If your opponent has more total energy cards attached, you may search your deck for 1 Fire Energy card and attach it to one of your Benched Pokémon, if any. Shuffle your deck afterward. This power can't be used if Typhlosion is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez compter le nombre total de cartes Énergie attachées à tous vos Pokémon et à tous ceux de votre adversaire. Si au total, votre adversaire a plus de cartes Énergie attachées que vous, vous pouvez chercher dans votre deck 1 carte Énergie  et l'attacher à l'un des Pokémon de votre Banc, si vous en possédez. Mélangez ensuite votre deck. Ce pouvoir ne peut pas être utilisé si Typhlosion est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Singe",
				fr: "Ça sent le roussi !"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card

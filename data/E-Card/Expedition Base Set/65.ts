import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
		de: "Tornupto"
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
		fr: "Feurisson"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Heat Up",
				fr: "Cuisson",
				de: "Aufheizen"
			},
			effect: {
				en: "Once during your turn (before you attack), You may count the total number of Energy cards attached to all of your Pokémon and all of your opponent's Pokémon. If your opponent has more total energy cards attached, you may search your deck for 1 Fire Energy card and attach it to one of your Benched Pokémon, if any. Shuffle your deck afterward. This power can't be used if Typhlosion is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez compter le nombre total de cartes Énergie attachées à tous vos Pokémon et à tous ceux de votre adversaire. Si au total, votre adversaire a plus de cartes Énergie attachées que vous, vous pouvez chercher dans votre deck 1 carte Énergie  et l'attacher à l'un des Pokémon de votre Banc, si vous en possédez. Mélangez ensuite votre deck. Ce pouvoir ne peut pas être utilisé si Typhlosion est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du zählen, wie viele Energiekarten an alle deine Pokémon angelegt sind und wie viele an alle Pokémon deines Gegners. Wenn an die Pokémon deines Gegners mehr Energiekarten angelegt sind, kannst du dein Deck nach 1 -Energiekarte durchsuchen und diese, falls du Pokémon auf deiner Bank hast, an 1 dieser Pokémon anlegen. Mische dein Deck danach. Diese Fähigkeit kann nicht verwendet werden, falls Tornupto von einem Speziellen Zustand betroffen ist."
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
				fr: "Ça sent le roussi !",
				de: "Super-Versengung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verbrannt."
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

	thirdParty: {
		cardmarket: 274903,
		tcgplayer: 90102
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card

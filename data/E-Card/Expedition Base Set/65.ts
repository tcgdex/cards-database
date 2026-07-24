import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [70],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson"
	},

	stage: "Stage1",

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
				en: "Growth",
				fr: "Ça sent le roussi !",
				de: "Super-Versengung"
			},
			effect: {
				en: "Attach up to 2 Grass Energy cards from your hand to Weepinbell.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90102,
				cardmarket: 274903
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card

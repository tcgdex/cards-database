import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Negapi",
		de: "Minun"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		312,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Minus Charge",
				fr: "Recharge négative",
				de: "Minus-Aufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, you may draw 2 cards. You can't use more than 1 Minus Charge Poké-Power each turn. This power can't be used if Minun is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vos Pokémon ont été mis K.O lors du dernier tour de votre adversaire, vous pouvez piocher 2 cartes. Vous ne pouvez pas utiliser plus d'1 Poké-Power Recharge négative par tour. Ce pouvoir ne peut pas être utilisé si Negapi est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn mindestens 1 deiner Pokémon im letzten Zug deines Gegners kampfunfähig wurde, 2 Karten ziehen. Du kannst nicht mehr als 1 Minus-Aufladung Poké-Power pro Zug einsetzen. Diese Poké-Power kann nicht benutzt werden, wenn Minun von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tag Play (-)",
				fr: "Jeu du chat (-)",
				de: "Fangen spielen -"
			},
			effect: {
				en: "If you have Plusle on your Bench, you may move an Energy card attached to Minun to 1 of your Benched Pokémon.",
				fr: "Si Posipi se trouve sur votre Banc, vous pouvez déplacer une carte Énergie attachée à Negapi sur 1 des Pokémon de votre Banc.",
				de: "Wenn sich Plusle auf deiner Bank befindet, kannst du 1 an Minun angelegte Energiekarte entfernen und an 1 Pokémon auf deiner Bank anlegen."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card

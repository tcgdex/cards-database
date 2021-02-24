import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan Niv. 47",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Flutter Wings",
				fr: "Battement d'ailes",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Beedrill is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck un Pokémon Grass. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Dardargnan est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Needle Shock",
				fr: "Choc aiguille",
			},
			effect: {
				en: "The Defending Pokémon is now Paralyzed and Poisoned. Ignore this effect if any of your Pokémon used Needle Shock during your last turn.",
				fr: "Le Pokémon Défenseur est maintenant Paralysé et Empoisonné. Ignorez cet effet si un de vos Pokémon a utilisé Choc aiguille lors de votre dernier tour.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 1,



}

export default card

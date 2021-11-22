import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Huntail",
		fr: "Serpang"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		367,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Reactive Generator",
				fr: "Générateur réactif"
			},
			effect: {
				en: "Once during your turn (before your attack), if Huntail has no React Energy cards attached to it, you may search your deck for a React Energy card and attach it to Huntail. Shuffle your deck afterward. This power can't be used if Huntail is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Serpang ne possède pas de cartes Énergie réaction, vous pouvez chercher dans votre deck une carte Énergie réaction et l'attacher à Serpang. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Serpang est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite Off",
				fr: "Arracher d'un coup de dent"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card

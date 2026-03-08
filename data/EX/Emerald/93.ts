import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Deoxys ex",
		fr: "Deoxys ex",
		de: "Deoxys ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		386,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Form Change",
				fr: "Changement de forme",
				de: "Form Change"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for another Deoxys ex and switch it with Deoxys ex. (Any cards attached to Deoxys ex, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys ex on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une autre Deoxys ex et l'échanger avec Deoxys ex. (Toutes les cartes attachées à Deoxys ex, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Deoxys ex au-dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Changement de forme par tour.",
				de: "Once during your turn (before your attack), you may search your deck for another Deoxys ex and switch it with Deoxys ex. (Any cards attached to Deoxys ex, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys ex on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fastwave",
				fr: "Lame de fond",
				de: "Fastwave"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 84773,
		cardmarket: 276604
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card

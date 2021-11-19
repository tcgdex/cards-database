import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Deoxys ex",
		fr: "Deoxys ex"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		386,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Form Change",
				fr: "Changement de forme"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for another Deoxys ex and switch it with Deoxys ex. (Any cards attached to Deoxys ex, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys ex on top of your deck. Shuffle your deck afterward. You can’t use more than 1 Form Change Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une autre Deoxys ex et l'échanger avec Deoxys ex. (Toutes les autres cartes qui lui sont attachées, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Deoxys ex au-dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Changement de forme par tour."
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
				fr: "Lame de fond"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	suffix: "EX",
	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card

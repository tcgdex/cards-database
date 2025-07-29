import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Type Shift",
				fr: "Transfert de type"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Rotom’s type is Psychic until the end of your turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Le type de Motisma est  jusqu'à la fin de votre tour."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist"
			},
			effect: {
				en: "Look at your opponent’s hand. This attack does 30 damage plus 10 more damage for each Trainer, Supporter, and Stadium card in your opponent’s hand.",
				fr: "Regardez la main de votre adversaire. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Dresseur, Supporter et Stade dans la main de votre adversaire."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its electric-like body can enter some kinds of machines and take control in order to make mischief.",
		fr: "Son corps parcouru d'électricité lui permet de prendre le contrôle de certains appareils ménagers."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278556
	}
}

export default card

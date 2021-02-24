import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross Niv. 44",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Aqua Recycle",
				fr: "Aqua recyclage",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a Water Energy card, show it to your opponent, and put it into your hand. This power can't be used if Starmie is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie Water. Montrez-la à votre adversaire et placez-la dans votre main. Ce pouvoir ne peut pas être utilisé si Staross est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synchro Gain",
				fr: "Synchro-gain",
			},
			effect: {
				en: "If Starmie and the Defending Pokémon have the same amount of Energy attached to them, remove 4 damage counters from Starmie.",
				fr: "Si Staross et le Pokémon Défenseur possèdent le même nombre d'Énergies, retirez à Staross 4 marqueurs de dégât.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Powerful Spin",
				fr: "Pirouette puissante",
			},
			effect: {
				en: "Starmie can't attack during your next turn.",
				fr: "Staross ne peut pas attaquer lors de votre prochain tour.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],





}

export default card

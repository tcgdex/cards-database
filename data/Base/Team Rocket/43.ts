import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Primeape",
		fr: "Colossinge obscur",
		de: "Dunkles Rasaff"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
		de: "Menki"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Frenzy",
				fr: "Pète les plombs",
				de: "Wahnsinn"
			},
			effect: {
				en: "If Dark Primeape does any damage while it's Confused (even to itself), it does 30 more damage.",
				fr: "Si Colossinge obscur inflige des dégâts lorsqu'il est Confus (y compris à lui-même), il inflige 30 dégâts supplémentaires.",
				de: "Falls Dunkles Rasaff irgendwelchen Schaden (sogar sich selbst) zufügt, während es verwirrt ist, fügt es 30 zusätzliche Schadenspunkte zu."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Frenzied Attack",
				fr: "Attaque frénétique",
				de: "Wahnsinnsangriff"
			},
			effect: {
				en: "Dark Primeape is now Confused (after doing damage).",
				fr: "Colossinge obscur est maintenant Confus (après application des dégâts).",
				de: "Dunkles Rasaff ist jetzt verwirrt (nach der Schadensverteilung)."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Although Primeapes have always been mean, lately they seem to be becoming even more vicious and frenzied.",
		fr: "Bien que les Colossinge aient toujours été mauvais, il semble que depuis peu, ils deviennent de plus en plus vicieux et frénétiques.",
		de: "Obwohl Rasaffs schon immer gemein gewesen sind, scheinen sie in neuester Zeit sogar noch bösartiger und frenetischer zu werden."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274096,
				tcgplayer: 84641
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274096,
				tcgplayer: 84641
			}
		}
	]
}

export default card

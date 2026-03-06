import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko",
		de: "Gewaldro"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Green Essence",
				fr: "Extrait de plante",
				de: "Green Essence"
			},
			effect: {
				en: "As long as Sceptile is in play, each of your Active Pokémon that has Grass Energy attached to it can't be affected by any Special Conditions.",
				fr: "Tant que Jungko est en jeu, vos Pokémon Actifs possédant une Énergie  ne peuvent pas être affectés par un État Spécial.",
				de: "As long as Sceptile is in play, each of your Pokémon that has a  Energie attached to it can´t be affected by any Special Conditions."
			},
		},
	],

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],

			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
				de: "Swift"
			},

			damage: 60,

			effect: {
				de: "This attack isn´t affected by Weakness,Resistance,Pokepowers,Pokebodys,or any other effects on the defending Pokémon."
			}
		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				de: "Razor Leaf"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 97730,
		cardmarket: 276521
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal"
		},
	]
}

export default card

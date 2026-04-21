import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Sceptile ex δ",
		fr: "Jungko ex δ",
		de: "Gewaldro ex"
	},

	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 140,

	types: [
		"Psychic",
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
				en: "Extra Liquid",
				fr: "Liquide supplémentaire",
				de: "Extraflüssigkeit"
			},
			effect: {
				en: "Each player's Pokémon-ex can't use any Poké-Powers and pays Colorless more Energy to use its attacks. Each Pokémon can't be affected by more than 1 Extra Liquid Poké-Body.",
				fr: "Le Pokémon-ex de chaque joueur ne peut pas utiliser de Poké-Powers et paye une Énergie  de plus pour utiliser ses attaques. Chaque Pokémon ne peut pas être affecté par plus d'1 Poké-Body Liquide supplémentaire.",
				de: "Die Pokémon-ex aller Spieler können keine Poké-Power einsetzen und ihre Angriffe kosten 1  mehr. Jedes Pokémon kann nur von 1 Extraflüssigkeit Poké-Body betroffen sein."
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
				en: "Power Revenge",
				fr: "Vengeance puissante",
				de: "Powerrache"
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each Prize card your opponent has taken.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque carte Récompense récoltée par votre adversaire.",
				de: "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jeden Preis, den dein Gegner bereits genommen hat, zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277177
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

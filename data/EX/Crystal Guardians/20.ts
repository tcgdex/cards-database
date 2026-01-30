import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
		de: "Groink"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Fat",
				fr: "Isograisse",
				de: "Speckschicht"
			},
			effect: {
				en: "Any damage done to Grumpig by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Groret par des attaques de Pokémon  et  sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Jeder Schaden, der Groink durch Angriffe von -Pokémon und -Pokémon zugefügt wird, wird um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Circular Steps",
				fr: "Pas circulaires",
				de: "Umkreisende Tanzschritte"
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's), excluding Grumpig.",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu (les vôtres et ceux de votre adversaire), Groret exclu.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jedes Pokémon im Spiel (deine und die deines Gegners), ausgenommen Groink, zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277101,
		tcgplayer: 85969
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

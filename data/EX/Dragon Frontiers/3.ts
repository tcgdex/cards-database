import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Heracross δ",
		fr: "Scarhino δ",
		de: "Skaraborn"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Shining Horn",
				fr: "Corne brillante",
				de: "Glänzendes Horn"
			},
			effect: {
				en: "As long as Heracross is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.",
				fr: "Tant que Scarhino est le seul Pokémon que vous ayez en jeu, les Pokémon de base de votre adversaire ne peuvent pas attaquer.",
				de: "Solange Skaraborn das einzige Pokémon ist, das du im Spiel hast, können die Basis-Pokémon deines Gegners nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dig Deep",
				fr: "Trou profond",
				de: "Tief graben"
			},
			effect: {
				en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie, montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Durchsuche deinen Ablagestapel nach einer Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Extra Claws",
				fr: "Griffes supplémentaires",
				de: "Extrakrallen"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277208
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card

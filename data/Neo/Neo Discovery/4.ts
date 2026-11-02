import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse",
		de: "Hundemon"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
		de: "Hunduster"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
				de: "Knirscher"
			},
			effect: {
				en: "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
				fr: "Jusqu'à la fin de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), elle lui inflige 20 dégâts de plus.",
				de: "Falls bis zum Ende deines nächsten Zugs ein Angriff dem verteidigenden Pokémon Schadenspunkte zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff dem verteidigenden Pokémon 20 weitere Schadenspunkte zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flammes",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard 1 Energy card attached to Houndoom or this attack does nothing.",
				fr: "Défaussez 1 carte Énergie  attachée à Démolosse pour pouvoir utiliser cette attaque.",
				de: "Lege eine an Hundemon angelegte {R}-Energiekarte auf deinen Ablagestapel, oder dieser Angriff hat keine Auswirkungen."
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Upon hearing its eerie howls, other Pokémon get the shivers and head straight back to their nests.",
		fr: "Quand ils entendent ses hurlements sinistres, les autres Pokémon ont un frisson dans le dos et ils retournent au nid.",
		de: "Wenn sein gruseliges Geheule zu hören ist, flüchten andere Pokémon zitternd in ihre Schlupfwinkel zurück."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274515,
				tcgplayer: 86197
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274515,
				tcgplayer: 86197
			}
		}
	]
}

export default card

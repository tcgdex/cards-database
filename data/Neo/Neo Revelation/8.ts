import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse",
		de: "Hundemon"
	},

	illustrator: "Mitsuhiro Arita",
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
				"Fire",
			],
			name: {
				en: "Dark Flame",
				fr: "Flamme obscure",
				de: "Finstere Flamme"
			},
			effect: {
				en: "Discard 1 Energy card attached to Houndoom or this attack does nothing. If there are any Energy cards in your discard pile, attach 1 of them to Houndoom.",
				fr: "Défaussez une carte Énergie  attachée à Démolosse pour utiliser cette attaque. S'il y a des cartes Énergie  dans votre pile de défausse, choisissez-en une et attachez-la à Démolosse.",
				de: "Lege 1 an Hundemon angelegte {R}-Energiekarte auf deinen Ablagestapel, oder dieser Angriff hat keine Auswirkungen. Wenn mindestens eine {D}-Energiekarte in deinem Ablagestapel ist, wähle eine davon und lege sie an Hundemon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Black Fang",
				fr: "Croc noir",
				de: "Dunkelzahn"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads.",
				fr: "Lancez un nombre de pièces égal au nombre d'Énergies  attachées à Démolosse. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Wirf so viele Münzen, wie {D}-Energie an Hundemon angelegt ist. Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte pro geworfenem „Kopf“ zu."
			},
			damage: "30+",

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
				cardmarket: 274594,
				tcgplayer: 86198
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274594,
				tcgplayer: 86198
			}
		}
	]
}

export default card

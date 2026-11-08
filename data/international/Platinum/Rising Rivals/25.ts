import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Hippowdon",
		'fr-fr': "Hippodocus Niv. 48",
		'de-de': "Hippoterus"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [450],

	hp: 110,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sand Cover",
				'fr-fr': "Couverture de sable",
				'de-de': "Sanddeckung"
			},
			effect: {
				'en-us': "As long as Hippowdon is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon LV.X between turns.",
				'fr-fr': "Tant qu'Hippodocus est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon LV.X de votre adversaire entre deux tours.",
				'de-de': "Solange Hippoterus dein Aktives Pokémon ist, lege zwischen den Zügen 1 Schadensmarke auf jedes Pokémon LV.X deines Gegners."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Save Sand",
				'fr-fr': "Sauve-sable",
				'de-de': "Sandspeicher"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Energy attached to Hippowdon. Before doing damage, you may search your discard pile for a Fighting Energy card and attach it to Hippowdon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Hippodocus. Avant d'infliger des dégâts, vous pouvez chercher une carte Énergie Fighting dans votre pile de défausse et l'attacher à Hippodocus.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Hippoterus angelegte Energie zu. Bevor der Schaden zugefügt wird kannst du deinen Ablagestapel nach einer -Energiekarte durchsuchen und sie an Hippoterus anlegen."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Groundquake",
				'fr-fr': "Tremblement de sol",
				'de-de': "Untergrundbeben"
			},
			effect: {
				'en-us': "Does 10 damage to each Benched Pokémon that isn't an Evolved Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon).",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc n'étant pas un Pokémon Évolué (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Dieser Angriff fügt allen Pokémon (deinen und denen deines Gegners) auf der Bank, die keine entwickelten Pokémon sind, 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278599,
				tcgplayer: 86085
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278599,
				tcgplayer: 86085
			}
		},
	],

}

export default card

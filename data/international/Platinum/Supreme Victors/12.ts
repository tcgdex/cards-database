import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Swampert",
		'fr-fr': "Laggron",
		'de-de': "Sumpex"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [260],

	hp: 130,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Root Protector",
				'fr-fr': "Protège-racine",
				'de-de': "Wurzelschutz"
			},
			effect: {
				'en-us': "Any damage done to Swampert by attacks from your opponent's Pokémon that isn't an Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à Laggron par les attaques du Pokémon de votre adversaire sont réduits de 20 si ce n'est pas un Pokémon Évolué (après application de la Faiblesse et de la Résistance).",
				'de-de': "Schaden, der Sumpex durch Angriffe von Pokémon deines Gegners, die keine entwickelten Pokémon sind, zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drag Off",
				'fr-fr': "Traîne",
				'de-de': "Wegzerren"
			},
			effect: {
				'en-us': "Before doing damage, you may switch your opponent's Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez échanger le Pokémon Actif de votre adversaire avec 1 de ses Pokémon de Banc.",
				'de-de': "Bevor der Schaden zugefügt wird, kannst du das Aktive Pokémon deines Gegners gegen 1 Pokémon auf der Bank deines Gegners austauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Push Over",
				'fr-fr': "Facilité",
				'de-de': "Umschubsen"
			},
			effect: {
				'en-us': "Does 60 damage plus 10 more damage for each Fighting Energy attached to Swampert.",
				'fr-fr': "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Fighting attachée à Laggron.",
				'de-de': "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Sumpex angelegte -Energie zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278703,
				tcgplayer: 89681,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278703,
				tcgplayer: 89681
			}
		},
	],

}

export default card

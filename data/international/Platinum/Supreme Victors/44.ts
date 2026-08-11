import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Shedinja",
		'fr-fr': "Munja",
		'de-de': "Ninjatom"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [292],

	hp: 60,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Nincada",
		'fr-fr': "Ningale"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Marvel Shell",
				'fr-fr': "Coquille merveilleuse",
				'de-de': "Mirakelpanzer"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Pokémon that has any Poké-Powers or Poké-Bodies.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Munja par les Pokémon de votre adversaire possédant des Poké-Powers ou des Poké-Bodies.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Ninjatom von gegnerischen Pokémon, die mindestens 1 Poké-Power oder Poké-Body haben, zugefügt würden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spike Wound",
				'fr-fr': "Blessure pointue",
				'de-de': "Stachelwunde"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "A discarded bug shell that came to life. Peering into the crack on its back is said to steal one's spirit."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89120,
				cardmarket: 278735
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278735,
				tcgplayer: 89120
			}
		},
	],

}

export default card

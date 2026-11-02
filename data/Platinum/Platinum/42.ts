import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
		de: "Noktuska"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [332],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
		de: "Tuska"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spike Wound",
				fr: "Blessure pointue",
				de: "Stachelwunde"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 50 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt. Dieser Angriff fügt dem gewählten Pokémon 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
				"Darkness",
			],
			name: {
				en: "Poison Experiment",
				fr: "Expérimentation empoisonnée",
				de: "Giftexperiment"
			},
			effect: {
				en: "You may discard a Grass or Darkness Energy attached to Cacturne. If you discard a Grass Energy, the Defending Pokémon is now Poisoned. If you discard a Darkness Energy, the Defending Pokémon is now Paralyzed.",
				fr: "Vous pouvez défausser une Énergie Grass ou Darkness attachée à Cacturne. Si vous défaussez une Énergie Grass, le Pokémon Défenseur est maintenant Empoisonné. Si vous défaussez une Énergie Darkness, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Du kannst 1 an Noktuska angelegte {G}- oder {D}-Energie auf deinen Ablagestapel legen. Wenn du 1 {G}-Energie auf deinen Ablagestapel legst, ist das Verteidigende Pokémon jetzt vergiftet. Wenn du 1 {D}-Energie auf deinen Ablagestapel legst, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		en: "It becomes active at night, seeking prey that is exhausted from the day's desert heat.",
		de: "Ein nachtaktives PKMN, das Beute sucht, die durch die Tageshitze der Wüste bereits erschöpft ist."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84081,
				cardmarket: 278463
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278463,
				tcgplayer: 84081
			}
		}
	],

}

export default card

import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Saya Tsuruta",
	category: "Pokemon",

	dexId: [131],

	description: {
		en: "These Pokémon were once near extinction due to poaching. Following protective regulations, there is now an overabundance of them.",
		de: "Es wäre einst durch übermäßiges Fischen fast ausgestorben. Durch ein strenges Abkommen zum Artenschutz gibt es nun fast zu viele."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Aqua Bullet",
			de: "Aquageschoss"
		},

		damage: 20,

		effect: {
			en: "This attack does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		name: {
			en: "Hydro Pump",
			de: "Hydropumpe"
		},

		damage: "70+",

		effect: {
			en: "This attack does 10 more damage times the amount of Water Energy attached to this Pokémon.",
			de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten {W}-Energien zu."
		}
	}],

	name: {
		en: "Lapras",
		de: "Lapras"
	},

	rarity: "None",
	hp: 120,
	types: ["Water"],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412869,
				tcgplayer: 200966
			}
		}
	]
}

export default card


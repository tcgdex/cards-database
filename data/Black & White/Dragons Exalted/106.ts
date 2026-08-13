import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Bidoof",
		fr: "Keunotor",
		es: "Bidoof",
		it: "Bidoof",
		pt: "Bidoof",
		de: "Bidiza"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		399,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bang Heads",
				fr: "Choc Frontal",
				de: "Prallköpfe"
			},
			effect: {
				en: "Both this Pokémon and the Defending Pokémon are now Confused.",
				fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Confus.",
				de: "Dieses Pokémon und das Verteidigende Pokémon sind jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "A comparison revealed that Bidoof's front teeth grow at the same rate as Rattata's.",
		de: "Ein Vergleich zeigte, dass die Vorderzähne von Bidiza und Rattfratz gleich schnell wachsen."
	},

	thirdParty: {
		cardmarket: 280545,
		tcgplayer: 83829
	}
}

export default card

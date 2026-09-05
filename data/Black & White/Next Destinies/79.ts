import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		de: "Pummeluff"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
				de: "Kanon"
			},
			effect: {
				en: "Does 20 damage times the number of your Pokémon that have the Round attack.",
				fr: "Inflige 20 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte für jedes deiner Pokémon zu, das Kanon beherrscht."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf 1 Münze. Bei „Kopf“ schläft das Verteidigende Pokémon jetzt."
			},
			damage: 60,

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
		en: "Its fine fur feels sublime to the touch. It can expand its body by inhaling air.",
		de: "Sein feines Fell fühlt sich herrlich an. Es kann sich größer machen, indem es Luft einatmet."
	},

	thirdParty: {
		cardmarket: 280304,
		tcgplayer: 90600
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Téraclope",
		de: "Zwirrklop"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [356],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Duskull",
		fr: "Skelénox",
		de: "Zwirrlicht"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Judgement",
				fr: "Jugement",
				de: "Urteil"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
				fr: "Lancez deux pièces. Si ce sont deux faces, le Pokémon Défenseur est mis K.O.",
				de: "Wirf 2 Münzen. Wenn beide „Kopf“ zeigen, wird das Verteidigende Pokémon kampfunfähig."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Random Curse",
				fr: "Malédiction au pif",
				de: "Zufälliger Fluch"
			},
			effect: {
				en: "Put a total of 5 damage counters on all Defending Pokémon in any way you like.",
				fr: "Placez comme vous le voulez un total de cinq marqueurs de dégât sur tout Pokémon Défenseur.",
				de: "Verteile auf beliebige Weise insgesamt 5 Schadensmarken auf alle Verteidigenden Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275781,
				tcgplayer: 85024
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275781,
				tcgplayer: 85024
			}
		},
	],

}

export default card

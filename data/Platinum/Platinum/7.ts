import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Dialga G",
		fr: "Dialga ",
		de: "Dialga G"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 100,

	types: [
		"Metal",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Deafen",
				fr: "Rendre sourd",
				de: "Deafen"
			},
			effect: {
				en: "Your opponent can't play any Trainer cards or Stadium cards from his or her hand during your opponent's next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Dresseur ou Stade de sa main lors de son prochain tour.",
				de: "Your opponent can't play any Trainer cards or Stadium cards from his or her hand during your opponent's next turn."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Second Strike",
				fr: "Deuxième coup",
				de: "Second Strike"
			},
			effect: {
				en: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 50 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà au moins 2 marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		tcgplayer: 84810
	},

	variants:[
		{
			type:"holo"
		},
		{
			type:"reverse"
		},
		{
			type:"reverse",
			foil: "league"
		},
		{
			type:"holo",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type:"holo",
			stamp: ["yuta-komatsuda"]
		},
	]
}

export default card

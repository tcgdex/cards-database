import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Dialga G",
		fr: "Dialga G",
		de: "Dialga G"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [483],

	hp: 100,

	types: [
		"Metal"
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
				de: "Ohren betäuben"
			},
			effect: {
				en: "Your opponent can't play any Trainer cards or Stadium cards from his or her hand during your opponent's next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Dresseur ou Stade de sa main lors de son prochain tour.",
				de: "Dein Gegner kann in seinem nächsten Zug keine Trainer- oder Stadion-Karten von seiner Hand spielen."
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
				de: "Sekundärschlag"
			},
			effect: {
				en: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 50 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà au moins 2 marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn auf dem Verteidigenden Pokémon bereits mindestens 2 Schadensmarken liegen, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
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

	variants: [		{
			type:"holo",
			thirdParty: {
				tcgplayer: 84810,
				cardmarket: 278428
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278428,
				tcgplayer: 84810
			}
		},
		{
			type:"reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 278428,
				tcgplayer: 178008
			}
		},
		{
			type:"holo",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479894
			}
		},
		{
			type:"holo",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				tcgplayer: 480026
			}
		},
	],

}

export default card

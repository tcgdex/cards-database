import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Mienfoo",
		fr: "Kungfouine",
		es: "Mienfoo",
		it: "Mienfoo",
		pt: "Mienfoo",
		de: "Lin-Fu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		619,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Steady Punch",
				fr: "Poing Énergétique",
				de: "Ruhiger Schlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 weitere Schadenspunkte zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "In fights, they dominate with onslaughts of flowing, continuous attacks. With their sharp claws, they cut enemies.",
		de: "Es deckt seine Gegner mit filigranen Attacken in Serie ein und schlitzt sie mit seinen spitzen Klauen auf."
	},

	thirdParty: {
		cardmarket: 280673,
		tcgplayer: 87438
	}
}

export default card

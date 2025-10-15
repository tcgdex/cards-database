import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
		de: "Porenta"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		83,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leek Slap",
				fr: "Coup d'oignon",
				de: "Lauchschlag"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Farfetch'd stays in play (even putting Farfetch'd on the Bench won't let you use it again.)",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Quel que soit le résultat, vous ne pouvez plus utiliser cette attaque aussi longtemps que Canarticho reste en jeu (même renvoyer Canarticho sur le Banc ne vous permet pas de l'utiliser à nouveau).",
				de: "Wir 1 Münze. Bei Zahl hat dieser Angriff keine Auswirkung. In jedem Fall kannst du diesen Angriff solange nicht mehr einsetzen, wie Porenta im Spiel bleibt (sogar wenn Porenta auf de Bank gesetzt wird, kan dieser Angriff nicht mehr eingesetzt werden.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pot Smash",
				fr: "Coup de casserole",
				de: "Topfschmetterer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
	description: {
		fr: "Il utilise l'oignon qu'il a dans la bouche comme une épée d'acier."
	},

	thirdParty: {
		cardmarket: 273722,
		tcgplayer: 42368
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
		es: "Druddigon",
		it: "Druddigon",
		pt: "Druddigon",
		de: "Shardrago"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		621,
	],

	hp: 110,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
				de: "Schutzdruck"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				de: "Drachenklaue"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It runs through the narrow tunnels formed by Excadrill and Onix. It uses its sharp claws to catch prey.",
		de: "Es jagt in schmalen, von Stalobor und Onix gegrabenen Schächten nach Beute und spießt sie mit spitzen Klauen auf."
	},

	thirdParty: {
		cardmarket: 280834,
		tcgplayer: 84982
	}
}

export default card

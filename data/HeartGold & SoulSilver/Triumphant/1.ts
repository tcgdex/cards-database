import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
		de: "Stolloss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Second Strike",
				fr: "Deuxième coup",
				de: "Sekundärschlag"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
				de: "Wenn auf dem Verteidigenden Pokémon bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Claw",
				fr: "Griffe de garde",
				de: "Abwehrklaue"
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à Galeking par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Stolloss durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

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

	retreat: 4,

	description: {
		en: "You can tell its age by the length of its iron horns. It claims an entire mountain as its territory."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

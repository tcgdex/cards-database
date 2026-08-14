import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		555,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
		de: "Flampion"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Smash",
				fr: "Éclate-Roc",
				de: "Zertrümmerer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
				fr: "Poing de Feu",
				de: "Flammenschlag"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Its internal fire burns at 2,500º F, making enough power that it can destroy a dump truck with one punch.",
		de: "Erhitzt das Innere seines Körpers auf 1400 Grad und erlangt so dieKraft, um mit der Faust Laster zu zerstören."
	},

	thirdParty: {
		cardmarket: 279986,
		tcgplayer: 84714
	}
}

export default card

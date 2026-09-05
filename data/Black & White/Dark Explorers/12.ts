import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		es: "Flareon",
		it: "Flareon",
		pt: "Flareon",
		de: "Flamara"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sand-Attack",
				fr: "Jet de Sable",
				de: "Sandwirbel"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Slash",
				fr: "Flamme Tranchante",
				de: "Flammenschlitzer"
			},
			effect: {
				en: "You may discard a Fire Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				fr: "Vous pouvez défausser une Énergie  attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Du kannst 1 an dieses Pokémon angelegte {R}-Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Inhaled air is heated in the flame sac in its body to an intense fire over 3,000 degrees Fahrenheit.",
		de: "Eingeatmete Luft wird in einem Flammensack in seinem Körper auf ca. 1 700 Grad erhitzt."
	},

	thirdParty: {
		cardmarket: 280340,
		tcgplayer: 85500
	}
}

export default card

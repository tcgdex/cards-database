import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [505],
	set: Set,

	name: {
		en: "Watchog",
		fr: "Miradar",
		es: "Watchog",
		it: "Watchog",
		pt: "Watchog",
		de: "Kukmarda"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	stage: "Stage1",

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
			de: "Konfustrahl"
		},
		effect: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
			de: "Das Verteidigende Pokémon ist jetzt verwirrt."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Hyper Fang",
			fr: "Croc de Mort",
			de: "Hyperzahn"
		},
		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
		},
		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		en: "They make the patterns on their bodies shine in order to threaten predators. Keen eyesight lets them see in the dark.",
		de: "Schüchtert Gegner ein, indem es die Maserung seines Fells aufblitzen lässt. Auch im Dunkeln entgeht ihm nichts."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280066,
				tcgplayer: 98705
			}
		},
	],

}

export default card

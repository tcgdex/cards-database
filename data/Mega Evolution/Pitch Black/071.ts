import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Bombirdier uses the apron on its chest to bundle up food, which it carries back to its nest. It enjoys dropping things that make loud noises.",
		de: "Es wickelt Futter in seine Brustschürze und trägt es so heim ins Nest. Liebend gern lässt es Dinge herabfallen, die beim Aufprall Lärm verursachen."
	},

	name: {
		en: "Bombirdier",
		fr: "Lestombaile",
		es: "Bombirdier",
		'es-mx': "Bombirdier",
		de: "Adebom"
	},

	illustrator: "Wintr Wandr",
	rarity: "Common",
	category: "Pokemon",
	dexId: [962],
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Challenginge Delivery",
			de: "Schwierige Lieferung"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. If both of them are heads, search your deck for 1 Pokémon and put it onto your Bench, then shuffle your deck.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, durchsuche dein Deck nach 1 Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		name: {
			en: "Speed Wing",
			de: "Turboschwinge"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895855,
				tcgplayer: 704828
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895855,
				tcgplayer: 704828
			}
		},
	],
}

export default card

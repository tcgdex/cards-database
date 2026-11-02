import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	retreat: 1,
	illustrator: "kodama",

	description: {
		en: "A plan was recently announced to gather many Pikachu and make an electric power plant.",
		de: "Vor Kurzem wurden Pläne verkündet, mithilfe einer großen Anzahl an Pikachu ein ganzes Kraftwerk zu betreiben."
	},

	attacks: [{
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			de: "Schweifvertrimmer"
		},

		damage: 10
	}, {
		name: {
			en: "Spark",
			fr: "Étincelle",
			de: "Funkensprung"
		},

		damage: 20,

		effect: {
			en: "This attack does 10 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297245,
				tcgplayer: 152868
			}
		},
	],

}

export default card
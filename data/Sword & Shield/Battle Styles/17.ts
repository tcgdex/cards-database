import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [824],
	set: Set,
	cameoDexIds: [891],

	name: {
		en: "Blipbug",
		fr: "Larvadar",
		es: "Blipbug",
		it: "Blipbug",
		pt: "Blipbug",
		de: "Sensect"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		en: "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings.",
		de: "Dieses Pokémon trifft man oft auf Feldern an. Mit den Haaren, die an seinem Körper wachsen, spürt es, was in der Umgebung vor sich geht."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544991,
				tcgplayer: 234085
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544991,
				tcgplayer: 234085
			}
		},
	],
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [824],
	set: Set,

	name: {
		fr: "Larvadar",
		en: "Blipbug",
		es: "Blipbug",
		it: "Blipbug",
		pt: "Blipbug",
		de: "Sensect"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Ronge",
			en: "Gnaw",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings.",
		de: "Dieses Pokémon trifft man oft auf Feldern an. Mit den Haaren, die an seinem Körper wachsen, spürt es, was in der Umgebung vor sich geht."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539423,
				tcgplayer: 232351
			}
		},
	],
}

export default card

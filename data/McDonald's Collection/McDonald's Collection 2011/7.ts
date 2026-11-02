import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [517],

	description: {
		en: "It eats the dreams of people and Pokémon. When it eats a pleasant dream, it expels pink-colored mist.",
		de: "Es verschlingt die Träume der Menschen. Frisst es einen fröhlichen Traum, stößt es danach einen rosafarbenen Dunst aus."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Yawn",
			fr: "Bâillement",
			de: "Gähner"
		},

		effect: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
			de: "Das Verteidigende Pokémon schläft jetzt."
		}
	}],

	name: {
		en: "Munna",
		fr: "Munna",
		de: "Somniam"
	},

	rarity: "None",
	hp: 60,
	types: ["Psychic"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281796,
				tcgplayer: 87642
			}
		}
	]
}

export default card


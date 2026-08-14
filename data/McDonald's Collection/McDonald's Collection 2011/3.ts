import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [498],

	description: {
		en: "It blows fire through its nose. When it catches a cold, the fire becomes pitch-black smoke instead.",
		de: "Es schießt Flammen aus seinem Rüssel. Ist es erkältet, kommt statt Feuer aber nur pechschwarzer Rauch zum Vorschein."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ember",
			fr: "Flammèche",
			de: "Glut"
		},

		damage: 30,

		effect: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
			de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
		}
	}],

	name: {
		en: "Tepig",
		fr: "Gruikui",
		de: "Floink"
	},

	rarity: "None",
	hp: 70,
	types: ["Fire"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281792,
				tcgplayer: 89882
			}
		}
	]
}

export default card


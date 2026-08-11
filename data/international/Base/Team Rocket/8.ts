import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Gyarados",
		'fr-fr': "Léviator obscur",
		'de-de': "Dunkles Garados"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Final Beam",
				'fr-fr': "Rayon final",
				'de-de': "Final Beam"
			},
			effect: {
				'en-us': "When Dark Gyarados is Knocked Out by an attack, flip a coin. If heads, this power does 20 damage for each Water Energy attached to Dark Gyarados to the Pokémon that Knocked Out Dark Gyarados. Apply Weakness and Resistance. This power doesn't work if Dark Gyarados is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Lorsque Léviator obscur est mis K.O. par une attaque, lancez une pièce. Si c'est face, ce pouvoir inflige 20 dégâts au Pokémon qui a mis K.O. Léviator obscur pour chaque Énergie  attachée à Léviator obscur. Appliquez la Faiblesse et la Résistance. Ce pouvoir ne fonctionne pas si Léviator obscur est Endormi, Confus ou Paralysé.",
				'de-de': "When Dark Gyarados is Knocked Out by an attack, flip a coin. If heads, this power does 20 damage for each  Energy attached to Dark Gyarados to the Pokémon that Knocked Out Dark Gyarados. Apply Weakness and resistance. This power doesn't work if Dark Gyarados is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Ice Beam",
				'fr-fr': "Laser Glace",
				'de-de': "Ice Beam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Normally found only in the deep ocean, it has recently been seen in shallow waters as well.",
		'fr-fr': "On le trouvait habituellement dans les profondeurs de l'océan, mais il a été vu récemment dans des eaux peu profondes."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274061,
				tcgplayer: 84606
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274061,
				tcgplayer: 84606
			}
		},
		{
			type: "holo",
			stamp: ["pre-release"]
		}
	]
}

export default card

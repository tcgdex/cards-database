import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Gyarados",
		fr: "Léviator obscur",
		de: "Dunkles Garados"
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
		en: "Magikarp",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Final Beam",
				fr: "Rayon final",
				de: "Final Beam"
			},
			effect: {
				en: "When Dark Gyarados is Knocked Out by an attack, flip a coin. If heads, this power does 20 damage for each Water Energy attached to Dark Gyarados to the Pokémon that Knocked Out Dark Gyarados. Apply Weakness and Resistance. This power doesn't work if Dark Gyarados is Asleep, Confused, or Paralyzed.",
				fr: "Lorsque Léviator obscur est mis K.O. par une attaque, lancez une pièce. Si c'est face, ce pouvoir inflige 20 dégâts au Pokémon qui a mis K.O. Léviator obscur pour chaque Énergie  attachée à Léviator obscur. Appliquez la Faiblesse et la Résistance. Ce pouvoir ne fonctionne pas si Léviator obscur est Endormi, Confus ou Paralysé.",
				de: "When Dark Gyarados is Knocked Out by an attack, flip a coin. If heads, this power does 20 damage for each  Energy attached to Dark Gyarados to the Pokémon that Knocked Out Dark Gyarados. Apply Weakness and resistance. This power doesn't work if Dark Gyarados is Asleep, Confused, or Paralyzed."
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
				en: "Ice Beam",
				fr: "Laser Glace",
				de: "Ice Beam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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

	description: {
		fr: "On le trouvait habituellement dans les profondeurs de l'océan, mais il a été vu récemment dans des eaux peu profondes."
	},

	thirdParty: {
		cardmarket: 274061,
		tcgplayer: 84606
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Torterra",
		fr: "Torterra",
		de: "Chelterrar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [389],

	hp: 140,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
		de: "Chelcarain"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Green Blast",
				fr: "Explosion verte",
				de: "Naturstoß"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Grass attachée à tous vos Pokémon.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede {G}-Energie, die an allen deinen Pokémon angelegt ist, zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur apaisante",
				de: "Beruhigender Duft"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 4,

	description: {
		en: "Some Pokémon are born on a TORTERRA's back and spend their entire life there.",
		de: "Manche PKMN werden auf dem Rücken eines CHELTERRAR geboren und verbringen ihr ganzes Leben dort."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89986,
				cardmarket: 278460
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278460,
				tcgplayer: 89986
			}
		}
	],

}

export default card

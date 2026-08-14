import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Muk",
		fr: "Grotadmorv obscur",
		de: "Dunkles Sleimok"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Sticky Goo",
				fr: "Boue collante",
				de: "Klebrige Schmiere"
			},
			effect: {
				en: "As long as Dark Muk is your Active Pokémon, your opponent pays 2 more to retreat his or her Active Pokémon. This power stops working while Dark Muk is Asleep, Confused, or Paralyzed.",
				fr: "Tant que Grotadmorv obscur est votre Pokémon Actif, votre adversaire paye  supplémentaires pour faire battre en retraite son Pokémon Actif. Ce pouvoir cesse de fonctionner quand Grotadmorv obscur est Endormi, Confus ou Paralysé.",
				de: "Solange Dunkles Sleimok dein aktives Pokémon ist, zahlt dein Gegner {C}{C} mehr Rückzugskosten für sein oder ihr aktives Pokémon. Diese Fähigkeit verliert seine Wirkung, solange Dunkles Sleimok schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sludge Punch",
				fr: "Point gadoue",
				de: "Schlammbadhieb"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "Muks appear suddenly, spreading sludge everywhere. Whenever one appears in a city, panic ensues.",
		fr: "Les Grotadmorv apparaissent sans prévenir, répandant de la gadoue partout. À chaque fois qu'ils apparaissent dans une cité, la panique s'ensuit.",
		de: "Sleimoks erscheinen plötzlich und verbreiten überall Schlamm. Jedesmal, wenn eines in der Stadt auftaucht, bricht Panik aus."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274094,
				tcgplayer: 84630
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274094,
				tcgplayer: 84630
			}
		}
	]
}

export default card

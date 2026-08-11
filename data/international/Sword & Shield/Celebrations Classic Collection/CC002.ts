import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [
		{
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danseflamme",
			},
			effect: {
				'en-us': "Discard 2 Energy cards attached to Charizard in order to use this attack.",
				'fr-fr': "Défaussez 2 cartes Énergie attachées à Dracaufeu pour pouvoir utiliser cette attaque.",
			},
			damage: 100,
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
		},
	],

	weaknesses: [{
		type: "Water",
		value: ""
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,

	description: {
		'en-us': "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires."
	},

	abilities: [{
		type: "Pokemon Power",

		name: {
			'en-us': "Energy Burn",
			'fr-fr': "Espace Absolu"
		},

		effect: {
			'en-us': "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576772,
				tcgplayer: 250320
			}
		},
	],
}

export default card

import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'de-de': "Ariados"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [168],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Gluey Slime",
				'fr-fr': "Bave gluante",
				'de-de': "Gluey Slime"
			},
			effect: {
				'en-us': "As long as Ariados is in play, each player must pay an additional Colorless to retreat his or her Active Pokémon. Gluey Slime can't make a player pay more than an additional Colorless to retreat a Pokémon, even if there is more than 1 Ariados in play.",
				'fr-fr': "Tant que Migalos est en jeu, chaque joueur doit payer un  supplémentaire pour faire battre en retraite son Pokémon Actif. Bave gluante ne peut pas obliger un joueur à payer plus qu'un  supplémentaire pour faire battre en retraite un Pokémon, même s'il y a plus d'un Migalos en jeu.",
				'de-de': "As long as Ariados is in play, each player must pay an additional  to retreat his or her Active Pokémon. Gluey Slime can´t make a player pay more than an additional  to retreat a Pokémon, even if there is more than 1 Ariados in play."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Spider Force",
				'fr-fr': "Arachno-force",
				'de-de': "Spider Force"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage and the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires. Si c'est pile, cette attaque inflige 20 dégâts et le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage and the Defending Pokémon is now Paralyzed."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83613,
				cardmarket: 275072
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83613,
				cardmarket: 275072
			}
		},
	],
	retreat: 0
}

export default card

import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'de-de': "Arkani"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [59],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fire Veil",
				'fr-fr': "Voile feu",
				'de-de': "Feuerschleier"
			},
			effect: {
				'en-us': "If Arcanine is your Active Pokémon and is damaged by an opponent's attack (even if Arcanine is Knocked Out), the Attacking Pokémon is now Burned.",
				'fr-fr': "Si Arcanin est votre Pokémon Actif et que l'attaque de votre adversaire lui inflige des dégâts (même si Arcanin est mis K.O), le Pokémon Attaquant est maintenant Brûlé.",
				'de-de': "Wenn Arkani dein Aktives Pokémon ist und ihm Schaden durch einen gegnerischen Angriff zugefügt wird (auch wenn Arkani kampfunfähig gemacht wird), ist das Angreifende Pokémon jetzt verbrannt."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burn Up",
				'fr-fr': "Brûlure",
				'de-de': "Wegbrennen"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard all Fire Energy cards attached to Arcanine.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez toutes les cartes Énergie  attachées à Arcanin.",
				'de-de': "Wirf 1 Münze. Bei 'Zahl' lege alle an Arkani angelegten -Energiekarten auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275792,
				tcgplayer: 83579
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275792,
				tcgplayer: 83579
			}
		},
	],

}

export default card

import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo",
		'de-de': "Tohaido"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [319],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rough Skin",
				'fr-fr': "Peau dure",
				'de-de': "Rough Skin"
			},
			effect: {
				'en-us': "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				'fr-fr': "Si Sharpedo est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Sharpedo est mis K.O.), placez un marqueur de dégât sur le Pokémon Attaquant.",
				'de-de': "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), put 2 damage counters on the Attacking Pokémon"
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Slash",
				'fr-fr': "Entaille",
				'de-de': "Dark Slash"
			},
			effect: {
				'en-us': "You may discard a Darkness Energy card attached to Sharpedo. If you do, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Vous pouvez défausser une carte Énergie  attachée à Sharpedo. Les dégâts de base de cette attaque sont de 70 au lieu de 40.",
				'de-de': "You may discard a  Energy card attached to Sharpedo. If you do, this attack does 40 damage plus 30 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275670,
				tcgplayer: 89097
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275670,
				tcgplayer: 89097
			}
		},
	],

}

export default card

import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [778],

	name: {
		'en-us': "Mimikyu",
		'fr-fr': "Mimiqui",
		'es-es': "Mimikyu",
		'it-it': "Mimikyu",
		'pt-br': "Mimikyu",
		'de-de': "Mimigma"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Heal Jamming",
				'fr-fr': "Soins Suspendus",
				'es-es': "Bloqueo Curación",
				'it-it': "Interferenza Malsana",
				'pt-br': "Interferência de Cura",
				'de-de': "Heilstörung"
			},
			effect: {
				'en-us': "Your opponent's Benched Pokémon can't be healed.",
				'fr-fr': "Les Pokémon de Banc de votre adversaire ne peuvent pas être soignés.",
				'es-es': "Los Pokémon en Banca de tu rival no pueden ser curados.",
				'it-it': "I Pokémon nella panchina del tuo avversario non possono essere curati.",
				'pt-br': "Os Pokémon no Banco do seu oponente não podem ser curados.",
				'de-de': "Die Pokémon auf der Bank deines Gegners können nicht geheilt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Claw Slash",
				'fr-fr': "Tranch'Griffe",
				'es-es': "Cuchillada Garra",
				'it-it': "Lacerartiglio",
				'pt-br': "Golpe de Garra",
				'de-de': "Klauenschlitzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It wears a rag fashioned into a Pikachu costume in an effort to look less scary. Unfortunately, the costume only makes it creepier."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483284,
				tcgplayer: 219467
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483284,
				tcgplayer: 219467
			}
		},
	],
}

export default card

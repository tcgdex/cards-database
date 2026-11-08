import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Metagross",
		'fr-fr': "Metalosse",
		'de-de': "Metagross"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Metang"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Super Connectivity",
				'fr-fr': "Super connection",
				'de-de': "Super Connectivity"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your discard pile for a Psychic or Metal Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie  ou  et l'attacher à votre Pokémon Actif. Placez alors un marqueur de dégât sur ce Pokémon. Ce pouvoir ne peut pas être utilisé si Metalosse est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may search your discard pile for a  or  Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Metagross is affected by a Special Condition."
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
				'en-us': "Link Blast",
				'fr-fr': "Explosion en série",
				'de-de': "Link Blast"
			},
			effect: {
				'en-us': "If Metagross and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 40 instead of 70.",
				'fr-fr': "Si Metalosse et le Pokémon Défenseur ont un total d'Énergie différent, les dégâts de base de cette attaque sont de 40 et non de 70.",
				'de-de': "If Metagross and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 40 instead of 70."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87337,
				cardmarket: 276414
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87337,
				cardmarket: 276414
			},
		},
	],

}

export default card

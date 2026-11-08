import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Blastoise ex",
		'fr-fr': "Tortank ex",
		'de-de': "Turtok ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Rain",
				'fr-fr': "Pluie d'Énergie",
				'de-de': "Energy Rain"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Pokémon. Put 1 damage counter on that Pokémon. This power can't be used if Blastoise ex is affected by a Special Condition.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie  de votre main à 1 de vos Pokémon. Placez 1 marqueur de dégât sur ce Pokémon. Ce pouvoir ne peut pas être utilisé si Tortank ex est affecté par un État Spécial.",
				'de-de': "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Pokémon. Put 1 damage counter on that Pokémon. This power can't be used if Blastoise ex is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Hyper Whirlpool",
				'fr-fr': "Hyper tourbillon",
				'de-de': "Hyper Whirlpool"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, your opponent discards an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, votre adversaire défausse une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Flip a coin until you get tails. For each heads, your opponent discards an Energy card attached to the Defending Pokémon."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276280,
				tcgplayer: 83900
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				cardmarket: 869512,
				tcgplayer: 477601
			},
		},
	],
}

export default card

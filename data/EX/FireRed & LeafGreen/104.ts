import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Blastoise ex",
		fr: "Tortank ex"
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
		en: "Wartortle",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Rain",
				fr: "Pluie d'Énergie"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Pokémon. Put 1 damage counter on that Pokémon. This power can't be used if Blastoise ex is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie  de votre main à 1 de vos Pokémon. Placez 1 marqueur de dégât sur ce Pokémon. Ce pouvoir ne peut pas être utilisé si Tortank ex est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hyper Whirlpool",
				fr: "Hyper tourbillon"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, your opponent discards an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, votre adversaire défausse une carte Énergie attachée au Pokémon Défenseur."
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





}

export default card

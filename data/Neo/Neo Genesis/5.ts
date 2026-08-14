import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		de: "Impergator"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
		de: "Tyracroc"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Riptide",
				fr: "Courant",
				de: "Springflut"
			},
			effect: {
				en: "Does 10 damage plus 10 damage times the number of Energy cards in your discard pile. Then, shuffle all Energy cards from your discard pile into your deck.",
				fr: "Inflige 10 dégâts plus 10 dégâts multipliés par le nombre de cartes Énergie  dans votre pile de défausse. Ensuite, mélangez toutes les cartes Énergie  de votre pile de défausse dans votre deck.",
				de: "Fügt 10 Schadenspunkte plus 10 Schadenspunkte mal der Anzahl an {W}-Energiekarten in deinem Ablagestapel zu. Mische danach alle {W}-Energiekarten aus deinem Ablagestapel in dein Deck."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		en: "It is hard for it to support its own weight out of water, so it gets down on all fours. But it moves fast.",
		fr: "Il lui est difficile de supporter son propre poids hors de l'eau, c'est pourquoi il se met à quatre pattes. Mais il se déplace rapidement.",
		de: "Es kann sein Eigengewicht nur sehr schwer außerhalb des Wassers unterstützen. Daher läuft es auf allen Vieren, bewegt sich aber schnell."
	},

	abilities: [{
		name: {
			en: "Downpour",
			fr: "Averse",
			de: "Wolkenbruch"
		},

		effect: {
			en: "As often as you like during your turn (before your attack, you may discard a -Energy card from your hand. This power can´t be used if Feligatr is Asleep, Confused, or Paralyzed.",
			fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie  de votre main. Ce pouvoir ne peut être utilisé si Aligatueur est Endormi, Confus ou Paralysé.",
			de: "Bist du am Zug, kannst du (vor deinem Angriff) beliebig viele {W}-Energiekarten aus deiner Hand abwerfen. Diese Fähigkeit kann nicht verwendet werden, wenn Impergator schläft, verwirrt oder gelähmt ist."
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274404,
				tcgplayer: 85413
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274404,
				tcgplayer: 85413
			}
		}
	]
}

export default card

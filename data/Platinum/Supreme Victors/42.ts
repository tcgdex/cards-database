import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Sandslash",
		fr: "Sablaireau",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dig Down",
				fr: "Creuser vers le bas",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 5 cards of your deck. Choose as many Fighting Energy cards as you like, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward. This power can't be used if Sandslash is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 5 cartes du dessus de votre deck. Choisissez autant de cartes Énergie Fighting que vous le voulez, montrez-les à votre adversaire et placez-les dans votre main. Replacez les autres cartes au-dessus de votre deck, puis mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Sablaireau est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Needle",
				fr: "Aiguille",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card

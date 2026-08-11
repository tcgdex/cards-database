import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Seer",
		fr: "Superviseur",
		de: "Seher"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at the top 6 cards of your deck. Take all Basic Energy cards you find there, show them to your opponent, and then put them into your hand. Shuffle your deck afterward.",
		fr: "Regardez les 6 cartes du dessus de votre deck. Prenez-y toutes les cartes Énergie de base que vous y trouvez, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		de: "Look at the top 6 cards of your deck. Take all basic Energy cards you find there, show them to your opponent, and then put them into your hand. Shuffle your deck afterward."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89056,
				cardmarket: 275209
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89056,
				cardmarket: 275209
			}
		},
	]
}

export default card

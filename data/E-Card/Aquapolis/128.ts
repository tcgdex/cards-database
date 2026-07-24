import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		de: "Memory Berry",
		fr: "Baie de mémoire"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	set: Set,

	effect: {
		en: "Attach Memory Berry to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. The Pokémon this card is attached to can use any attack from its Basic Pokémon card or any Evolution card from which the Pokémon evolved. (You still have to pay for that attack's Energy cost.) Discard this card at the end of any turn the Pokémon attacks.",
		de: "Attach Memory Berry to I of your Pokémon that doesn't have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card.\n\nThe Pokémon this card is attached to can use any attack from its Basic Pokémon card or any Evolution card from which the Pokémon evolved. (You still have to pay for that attack´s Energy cost.) Discard this card at the end of any turn the Pokémon attacks.",
		fr: "Attachez Baie de mémoire à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui. Si ce Pokémon est mis K.O., défaussez-vous de cette carte.\n\nLe Pokémon auquel cette carte est attachée peut utiliser n'importe quelle attaque de la carte Pokémon de base ou de la carte Évolution dont ce Pokémon a évolué. (You still have to pay for that attack's Energy cost.) Discard this card at the end of any turn the Pokémon attacks."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87307,
				cardmarket: 275204
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87307,
				cardmarket: 275204
			}
		},
	]
}

export default card

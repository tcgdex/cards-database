import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Rare Candy",
		fr: "Super bonbon",
		de: "Sonderbonbon"
	},

	illustrator: "Noriko Hotta",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez l’un de vos Pokémon de base en jeu. Si vous avez dans votre main une carte Évolution de niveau 1 ou 2 correspondant à ce Pokémon, placez-la sur ce dernier (cela équivaut à faire évoluer ce Pokémon). (Si vous choisissez dans votre main une carte Évolution de niveau 2, placez-la sur le Pokémon de base correspondant au lieu d’un Pokémon de niveau 1.)",
		en: "Choose 1 of your Basic Pokémon in play. If you have a Stage 1 or Stage 2 card that evolves from that Pokémon in your hand, put that card on the Basic Pokémon. (This counts as evolving that Pokémon.) If you choose a Stage 2 Pokémon in your hand, put that Pokémon on the Basic Pokémon instead of on a Stage 1 Pokémon.",
		de: "Wähle 1 deiner Basis-Pokémon im Spiel. Wenn du eine Phase-2-Karte, auf der Hand hast, die sich aus diesem Pokémon entwickelt, lege sie auf das Basis-Pokémon. (Das zählt als Entwickeln des gewählten Pokémon.) Du kannst diese Karte nicht während deines ersten Zuges oder für ein Basis-Pokémon, das in diesem Zug ins Spiel gebracht wurde, verwenden."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88595,
				cardmarket: 279238
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88595,
				cardmarket: 279238
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 450263,
				tcgplayer: 221298
			}
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				cardmarket: 868771,
				tcgplayer: 480105
			}
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"],
			thirdParty: {
				cardmarket: 868773,
				tcgplayer: 480106
			}
		},
		{
			type: "normal",
			stamp: ["gustavo-wada"],
			thirdParty: {
				cardmarket: 868186,
				tcgplayer: 480468
			}
		},
		{
			type: "normal",
			stamp: ["christopher-kan"],
			thirdParty: {
				cardmarket: 868184,
				tcgplayer: 480470
			}
		},
		{
			type: "normal",
			stamp: ["ross-cawthorn"],
			thirdParty: {
				tcgplayer: 480471
			}
		},
		{
			type: "normal",
			stamp: ["david-cohen"],
			thirdParty: {
				cardmarket: 868185,
				tcgplayer: 480472
			}
		},
		{
			type: "normal",
			stamp: ["ross-cawthorn"],
			thirdParty: {
				cardmarket: 868187,
				tcgplayer: 480471
			}
		},
	],
}

export default card

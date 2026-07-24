import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Weakness Guard",
		fr: "Restauration d'énergie",
		de: "Energiewiederherstellung"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your Pokémon. Discard it at the end of your opponent's next turn. As long as this card is attached, this Pokémon has no Weakness.",
		fr: "Lancez 3 pièces. Pour chaque face, ajoutez une carte Énergie de votre pile de défausse à votre main. Si vous n'avez pas suffisamment de cartes Énergie de base dans votre pile de défausse, ajoutez-les toutes à votre main.",
		de: "Wirf 3 Münzen. Nimm für jeden 'Kopf' eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand. Falls du nicht genug Basis-Energiekarten in deinem Ablagestapel hast, nimm so viele wie möglich auf deine Hand."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85226,
				cardmarket: 275016
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card

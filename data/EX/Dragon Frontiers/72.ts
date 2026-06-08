import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Buffer Piece",
		fr: "Pare-chocs",
		de: "Dämpfender Talisman"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Buffer Piece to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. Damage done to the Pokémon Buffer Piece is attached to by an opponent's attack is reduced by 20 (after applying Weakness and Resistance). At the end of your opponent's turn after you played Buffer Piece, discard Buffer Piece.",
		fr: "Attachez Pare-chocs à 1 de vos Pokémon ne possédant pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez cette carte.\n\nLes dégâts infligés par une attaque de votre adversaire au Pokémon auquel Pare-chocs est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance). À la fin du tour de votre adversaire au cours duquel vous avez joué Pare-chocs, défaussez-la.",
		de: "Jeder Schaden, der dem Pokémon, an dem Dämpfender Talisman angelegt ist, durch gegnerische Angriffe zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Lege Dämpfender Talisman am Ende des nächsten Zuges deines Gegners auf den Ablagestapel"
	},

	thirdParty: {
		cardmarket: 277277,
		tcgplayer: 84013
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		}
	]
}

export default card

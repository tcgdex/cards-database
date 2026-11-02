import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Buffer Piece",
		fr: "Pare-chocs",
		de: "Dämpfender Talisman"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: 'Tool',
	set: Set,

	effect: {
		en: "Attach Buffer Piece to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. Damage done to the Pokémon Buffer Piece is attached to by an opponent's attack is reduced by 20 (after applying Weakness and Resistance). At the end of your opponent's turn after you played Buffer Piece, discard Buffer Piece.",
		fr: "Attachez Pare-chocs à un de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.\n\nLes dégâts infligés par une attaque de votre adversaire au Pokémon auquel Pare-chocs est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance). À la fin du tour de votre adversaire, défaussez-la.",
		de: "Lege Dämpfender Talisman an 1 deiner Pokémon an, das keine Pokémon-Ausrüstung hat. Wenn das Pokémon kampfunfähig gemacht wird, lege Dämpfender Talisman auf den Ablagestapel. Jeder Schaden, der dem Pokémon, an dem Dämpfender Talisman angelegt ist, durch Angriffe zugefügt wird, wird um 20 reduziert (nachdem Schwäche und Resistenz verrechntet wurden). Lege Dämpfender Talisman am Ende des nächsten Zuges deines Gegners (nachdem Dämpfender Talisman gespielt wurde) auf den Ablagestapel."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84012,
				cardmarket: 275960
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84012,
				cardmarket: 275960
			},
		},
	],

}

export default card

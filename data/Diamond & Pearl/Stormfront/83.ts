import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Energy Link",
		fr: "Chaîne d'énergie",
		de: "Energie-Koppler"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Energy Link to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as Energy Link is attached to a Pokémon, you may move an Energy card attached to that Pokémon to another of your Pokémon that has Energy Link attached to it. You may use this effect as often as you like during your turn.",
		fr: "Attachez Chaîne d'énergie à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.\n\nTant que Chaîne d'énergie est attachée à un Pokémon, vous pouvez déplacer une carte Énergie attachée à ce Pokémon sur un autre de vos Pokémon possédant Chaîne d'énergie. Vous pouvez utiliser cet effet autant de fois que vous le voulez lors de votre tour.",
		de: "Solange Energie-Koppler an ein Pokémon angelegt ist, kannst du 1 Energiekarte von diesem Pokémon entfernen und an ein anderes deiner Pokémon, an das Energie-Koppler angelegt ist, anlegen. Du kannst diesen Effekt beliebig oft während deines Zuges benutzen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 278381,
		tcgplayer: 85214
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card

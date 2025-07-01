import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Transceiver",
		fr: "Émetteur-Récepteur de la Team Rocket",
		de: "Team Rockets Transceiver",
		it: "Ricetrasmettitore del Team Rocket",
		es: "Walkie-talkie del Team Rocket",
		pt: "Transmissor da Equipe Rocket",
		'es-mx': "Walkie-talkie del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Search your deck for a Supporter card that has \"Team Rocket\" in its name, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Supporter ayant \" Team Rocket \" dans son nom, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach 1 Unterstützerkarte, bei der \"Team Rocket\" zum Namen gehört, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		it: "Cerca nel tuo mazzo una carta Aiuto che ha \"Team Rocket\" nel nome, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		es: "Busca en tu baraja 1 carta de Partidario que tenga \"Team Rocket\" en su nombre, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		pt: "Procure por uma carta de Apoiador no seu baralho que tenha \"Equipe Rocket\" em seu nome, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		'es-mx': "Busca en tu mazo 1 carta de Partidario que tenga \"Equipo Rocket\" en su nombre, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: {
		holo: false
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card

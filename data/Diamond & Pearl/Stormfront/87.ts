import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Marley's Request",
		fr: "La requête de Vivianne",
		de: "Charlies Anfrage"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your discard pile for 2 different Trainer, Supporter, or Stadium cards, show them to your opponent, and your opponent chooses 1 of them. Put that card into your hand, and discard the other card. (If all Trainer, Supporter, and Stadium cards in your discard pile have the same name, choose 1 of them. Show that card to your opponent and put it into your hand.)",
		fr: "Choisissez dans votre pile de défausse 2 cartes Dresseur, Supporter ou Stade différentes et montrez-les à votre adversaire. Celui-ci en choisit une. Placez cette carte dans votre main et défaussez l'autre. (Si toutes les cartes Dresseurs, Supporter et Stade dans votre pile de défausse ont le même nom, choisissez-en une. Montrez-la à votre adversaire et placez-la dans votre main.)",
		de: "Durchsuche deinen Ablagestapel nach 2 unterschiedlichen Trainer-, Unterstützer- oder Stadion-Karten und zeige sie deinem Gegner. Dein Gegner wählt 1 davon. Nimm die gewählte Karte auf die Hand und lege die andere Karte auf deinen Ablagestapel. (Wenn alle Trainer-, Unterstützer- und Stadion-Karten in deinem Ablagestapel jeweils den gleichen Namen haben, wähle 1 von ihnen. Zeige die gewählte Karte deinem Gegner und nimm sie auf die Hand.)",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278385,
		tcgplayer: 87223
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

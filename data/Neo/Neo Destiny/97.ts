import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Counterattack Claws",
		fr: "Griffes de défense",
		de: "Gegenangriffs-Klauen"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach Counterattack Claws to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. During your opponent's turn, if the Pokémon Counterattack Claws is attached to is your Active Pokémon and an opponent's attack damages it (even if it is Knocked Out), flip a coin. If heads, put 2 damage counters on the Defending Pokémon. Then, discard Counterattack Claws.",
		fr: "Attachez Griffes de défense à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nPendant le tour de votre adversaire, si Griffes de défense est attachée à votre Pokémon Actif et si l'attaque de votre adversaire lui inflige des dégâts (même s'il est mis K.O.), lancez une pièce. Si c'est face, placez 2 marqueurs de dégâts sur le Pokémon Actif. Défaussez-vous ensuite de Griffes de défense.",
		de: "Lege Gegenangriffs-Klauen an eines deiner Pokémon an, das keine Pokémon-Ausrüstung hat. Wenn im Zug deines Gegners das Pokémon, an das die Gegenangriffs-Klauen angelegt ist und der Angriff deines Gegners ihm Schaden zufügt (auch, wenn es dadurch kampfunfähig wurde), wirf eine Münze. Legen bei „Kopf“ 2 Schadensmarken auf das Pokémon deines Gegners, das dich gerade angegriffen hat. Lege dann die Gegenangriffs-Klauen auf deinen Ablagestapel."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274749,
				tcgplayer: 84448
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274749,
				tcgplayer: 84448
			}
		}
	]
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Memory Berry",
		fr: "Baie de mémoire",
		de: "Erinnerungsbeere"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Memory Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. The Pokémon this card is attached to can use any attack from its Basic Pokémon or its Stage 1 Evolution card. (You still have to pay for that attack's Energy cost.) If that Pokémon attacks, discard this card at the end of the turn.",
		fr: "Attachez Baie de mémoire à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.\n\nLe Pokémon auquel cette carte est attachée peut utiliser n'importe quelle attaque de sa carte Pokémon de base ou de sa carte Évolution de Niveau 1. (Vous devez toujours payer le Coût en Énergie de cette attaque.) Si ce Pokémon attaque, défaussez cette carte à la fin du tour.",
		de: "Das Pokémon, an das diese Karte anliegt, kann jeden Angriff seiner Basis- oder Phase 1-Pokémon-Karten verwenden. (Du musst die Energiekosten für diesen Angriff trotzdem bezahlen.) Wenn dieses Pokémon angreift, lege die Karte am Ende des Zuges auf den Ablagestapel."
	},

	thirdParty: {
		cardmarket: 277161,
		tcgplayer: 87308
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

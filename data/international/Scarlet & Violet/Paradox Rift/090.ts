import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [95],
	set: Set,

	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hard Headbutt",
			'fr-fr': "Coup d'Boule Dur",
			'es-es': "Cabezazo Duro",
			'it-it': "Duro Bottintesta",
			'pt-br': "Cabeçada Dura",
			'de-de': "Harte Kopfnuss"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'es-es': "Aterrizaje",
			'it-it': "Schiacciaterra",
			'pt-br': "Aperto de Terra",
			'de-de': "Schollenbrecher"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740586,
				tcgplayer: 523757,
				cardtrader: 265202
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740586,
				tcgplayer: 523757,
				cardtrader: 265202
			}
		},
	],

	illustrator: "Shiburingaru",

	
}

export default card

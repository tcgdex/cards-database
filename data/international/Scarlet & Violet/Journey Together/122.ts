import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [352],
	set: Set,

	name: {
		'en-us': "Kecleon",
		'fr-fr': "Kecleon",
		'es-es': "Kecleon",
		'de-de': "Kecleon",
		'it-it': "Kecleon",
		'pt-br': "Kecleon",
		'es-mx': "Kecleon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Stealth Attack",
			'fr-fr': "Attaque Furtive",
			'es-es': "Ataque Sigiloso",
			'de-de': "Tarnangriff",
			'it-it': "Attacco Furtivo",
			'pt-br': "Golpe Furtivo",
			'es-mx': "Ataque Sigiloso"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "0313",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817274,
				tcgplayer: 623549
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817274,
				tcgplayer: 623549
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [339],
	set: Set,

	name: {
		'en-us': "Barboach",
		'fr-fr': "Barloche",
		'es-es': "Barboach",
		'it-it': "Barboach",
		'pt-br': "Barboach",
		'de-de': "Schmerbe"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Hide",
			'fr-fr': "Cachette",
			'es-es': "Ocultarse",
			'it-it': "Nascondino",
			'pt-br': "Esconder",
			'de-de': "Verstecken"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'de-de': "Lehmschelle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751587,
				tcgplayer: 534211,
				cardtrader: 274234
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751587,
				tcgplayer: 534211,
				cardtrader: 274234
			}
		},
	],

	illustrator: "ryoma uratsuka",

	description: {
		'en-us': "Its two whiskers provide a sensitive radar. Even in muddy waters, it can detect its prey's location.",
	},

}

export default card

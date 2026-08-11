import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [51],
	set: Set,

	name: {
		'fr-fr': "Triopikeur",
		'en-us': "Dugtrio",
		'es-es': "Dugtrio",
		'it-it': "Dugtrio",
		'pt-br': "Dugtrio",
		'de-de': "Digdri"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Taupiqueur",
		'en-us': "Diglett",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'pt-br': "Diglett",
		'de-de': "Digda"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Tunnel",
			'en-us': "Dig",
			'es-es': "Excavar",
			'it-it': "Fossa",
			'pt-br': "Cavar",
			'de-de': "Schaufler"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725184,
				tcgplayer: 509791,
				cardtrader: 255789
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725184,
				tcgplayer: 509791,
				cardtrader: 255789
			}
		},
	],

	illustrator: "Nelnal",

	
}

export default card

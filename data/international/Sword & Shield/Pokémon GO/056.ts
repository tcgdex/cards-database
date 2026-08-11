import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [190],
	set: Set,

	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Bustle",
			'fr-fr': "Remue-Ménage",
			'es-es': "Bullicioso",
			'it-it': "Trambusto",
			'pt-br': "Alvoroçar",
			'de-de': "Hetzen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It searches for prey from the tops of trees. When it spots its favorite food, Bounsweet, Aipom gets excited and pounces.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665280,
				tcgplayer: 276975
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665280,
				tcgplayer: 276975
			}
		},
	],
}

export default card

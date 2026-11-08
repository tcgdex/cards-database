import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [18],
	set: Set,

	name: {
		'fr-fr': "Roucarnage",
		'en-us': "Pidgeot",
		'es-es': "Pidgeot",
		'it-it': "Pidgeot",
		'pt-br': "Pidgeot",
		'de-de': "Tauboss"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Roucoups",
		'en-us': "Pidgeotto",
		'es-es': "Pidgeotto",
		'it-it': "Pidgeotto",
		'pt-br': "Pidgeotto",
		'de-de': "Tauboga"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Battement",
			'en-us': "Flap",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Vol",
			'en-us': "Fly",
			'es-es': "Vuelo",
			'it-it': "Volo",
			'pt-br': "Voar",
			'de-de': "Fliegen"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'en-us': "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733613,
				tcgplayer: 502567,
				cardtrader: 261204
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733613,
				tcgplayer: 502567,
				cardtrader: 261204
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card

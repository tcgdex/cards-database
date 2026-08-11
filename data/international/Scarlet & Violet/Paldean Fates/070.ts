import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		'en-us': "Cyclizar",
		'fr-fr': "Motorizard",
		'es-es': "Cyclizar",
		'it-it': "Cyclizar",
		'pt-br': "Cyclizar",
		'de-de': "Mopex"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Darkness", "Colorless"],

		name: {
			'en-us': "Acceleration Drive",
			'fr-fr': "Conduite Accélérée",
			'es-es': "Impulso Aceleración",
			'it-it': "Propulsione Rapida",
			'pt-br': "Câmbio Acelerado",
			'de-de': "Schnellganggetriebe"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751608,
				tcgplayer: 534432,
				cardtrader: 274254
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751608,
				tcgplayer: 534432,
				cardtrader: 274254
			}
		},
	],

	illustrator: "GIDORA",

	description: {
		'en-us': "Apparently Cyclizar has been allowing people to ride on its back since ancient times. Depictions of this have been found in 10,000-year-old murals.",
	},

}

export default card

import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Flying Pikachu V",
		'fr-fr': "Pikachu Volant V",
		'es-es': "Pikachu Vuelo V",
		'it-it': "Pikachu Volo V",
		'pt-br': "Pikachu Voador V",
		'de-de': "Fliegendes Pikachu V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "aky CG Works",

	attacks: [{
		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'it-it': "Tuonoshock",
			'pt-br': "Trovoada de Choques",
			'de-de': "Donnerschock"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Fly",
			'fr-fr': "Vol",
			'es-es': "Vuelo",
			'it-it': "Volo",
			'pt-br': "Voar",
			'de-de': "Fliegen"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "E",
	suffix: "V",
	dexId: [25],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576751,
				tcgplayer: 250304
			}
		},
	],
}

export default card

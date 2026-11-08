import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [845],
	set: Set,

	name: {
		'fr-fr': "Nigosier",
		'en-us': "Cramorant",
		'es-es': "Cramorant",
		'it-it': "Cramorant",
		'pt-br': "Cramorant",
		'de-de': "Urgl"
	},

	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Plongée",
			'en-us': "Dive",
			'es-es': "Buceo",
			'it-it': "Sub",
			'pt-br': "Mergulho",
			'de-de': "Taucher"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon.",
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todos los efectos de ataques, incluido el daño, infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todos os efeitos de ataques, incluindo dano, causados a este Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'fr-fr': "Hydrocanon",
			'en-us': "Hydro Pump",
			'es-es': "Hidrobomba",
			'it-it': "Idropompa",
			'pt-br': "Jato d'Água",
			'de-de': "Hydropumpe"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			'en-us': "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "50+",
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

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It's so strong that it can knock out some opponents in a single hit, but it also may forget what it's battling midfight."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539538,
				tcgplayer: 232383
			}
		},
	],
}

export default card

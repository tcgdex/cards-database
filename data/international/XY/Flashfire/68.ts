import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Carbink",
		'fr-fr': "Strassie",
		'es-es': "Carbink",
		'it-it': "Carbink",
		'pt-br': "Carbink",
		'de-de': "Rocara"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		703,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Crystal Barrier",
				'fr-fr': "Barrière de Cristal",
				'es-es': "Barrera Cristal",
				'it-it': "Cristalschermo",
				'pt-br': "Barreira de Cristal",
				'de-de': "Kristallbarriere"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, impedirá todos os efeitos dos ataques a este Pokémon, inclusive danos, durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wonder Blast",
				'fr-fr': "Explosion Miracle",
				'es-es': "Explosión Asombrosa",
				'it-it': "Fantabomba",
				'pt-br': "Explosão Encantada",
				'de-de': "Wunderknall"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Fairy Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Fairy attachée à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Fairy unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Fairy assegnata a questo Pokémon.",
				'pt-br': "Esse ataque causa 20 de danos adicionais para cada Energia Fairy ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Fairy-Energie zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Born from temperatures and pressures deep underground, it fires beams from the stone in its head.",
	},

	thirdParty: {
		cardmarket: 281551,
		tcgplayer: 91205
	}
}

export default card

import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Healing Pirouette",
				'fr-fr': "Pirouette Apaisante",
				'es-es': "Pirueta Curativa",
				'it-it': "Curoetta",
				'pt-br': "Pirueta Curativa",
				'de-de': "Heilender Reigen"
			},
			effect: {
				'en-us': "Heal 20 damage from each of your Pokémon.",
				'fr-fr': "Soignez 20 dégâts à chacun de vos Pokémon.",
				'es-es': "Cura 20 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano de cada um dos seus Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sympathetic Slap",
				'fr-fr': "Gifle Cordiale",
				'es-es': "Bofetada Compasiva",
				'it-it': "Buffetto Cordiale",
				'pt-br': "Tapa Solidário",
				'de-de': "Mitfühlender Klaps"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon already has any damage counters on it before this attack does damage, this attack does nothing.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já tiver contadores de dano nele antes deste ataque causar dano, este ataque não fará nada.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Not only are these Pokémon fast runners, they're also few in number, so anyone who finds one must be lucky indeed.",
	},

	thirdParty: {
		cardmarket: 365789,
		tcgplayer: 178973
	}
}

export default card

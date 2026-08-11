import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Conkeldurr",
		'fr-fr': "Bétochef",
		'es-es': "Conkeldurr",
		'it-it': "Conkeldurr",
		'pt-br': "Conkeldurr",
		'de-de': "Meistagrif"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		534,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'es-es': "Gurdurr",
		'it-it': "Gurdurr",
		'pt-br': "Gurdurr",
		'de-de': "Strepoli"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Wake-Up Slap",
				'fr-fr': "Réveil Forcé",
				'es-es': "Espabila",
				'it-it': "Svegliopacca",
				'pt-br': "Tapa do Despertar",
				'de-de': "Weckruf"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage. Then, remove all Special Conditions from that Pokémon.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires. Ensuite, retirez tous les États Spéciaux de ce dernier.",
				'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 60 puntos de daño más. Después, elimina todas las Condiciones Especiales de ese Pokémon.",
				'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 60 danni in più. Poi, rimuovi tutte le condizioni speciali da quel Pokémon.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver sendo afetado por uma Condição Especial, esse ataque causará 60 de danos adicionais. Depois, remova todas as Condições Especiais desse Pokémon.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 60 weitere Schadenspunkte zu. Anschließend verlieren alle Speziellen Zustände auf dem Pokémon ihre Wirkung."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Dynamic Punch",
				'fr-fr': "Dynamopoing",
				'es-es': "Puñodinámico",
				'it-it': "Dinamipugno",
				'pt-br': "Soco Dinâmico",
				'de-de': "Wuchtschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage and your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 40 de danos adicionais e o Pokémon Ativo do seu oponente ficará Confuso.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is thought that Conkeldurr taught humans how to make concrete more than 2,000 years ago.",
	},

	thirdParty: {
		cardmarket: 281404,
		tcgplayer: 84421
	}
}

export default card

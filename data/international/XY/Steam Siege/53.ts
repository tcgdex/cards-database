import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'pt-br': "Primeape",
		'de-de': "Rasaff"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swagger",
				'fr-fr': "Vantardise",
				'es-es': "Contoneo",
				'it-it': "Bullo",
				'pt-br': "Arrogância",
				'de-de': "Angeberei"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sala cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Spirited Throw",
				'fr-fr': "Lancer Plein d'Esprit",
				'es-es': "Lanzamiento Inspirado",
				'it-it': "Lancio Vigoroso",
				'pt-br': "Lançamento Vigoroso",
				'de-de': "Energischer Wurf"
			},
			effect: {
				'en-us': "If, before doing damage, your opponent's Active Pokémon has more remaining HP than this Pokémon, this attack does 60 more damage.",
				'fr-fr': "Si, avant d'infliger des dégâts, il reste plus de PV au Pokémon Actif de votre adversaire qu'à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si, antes de infligir daño, al Pokémon Activo de tu rival le quedan más PS que a este Pokémon, este ataque hace 60 puntos de daño más.",
				'it-it': "Se, prima di infliggere i danni, il Pokémon attivo del tuo avversario ha più PS rimanenti di questo Pokémon, questo attacco infligge 60 danni in più.",
				'pt-br': "Se, antes de causar danos, o Pokémon Ativo do seu oponente tiver mais PS restante do que este Pokémon, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn, bevor du Schaden zufügst, das Aktive Pokémon deines Gegners mehr verbliebene KP hat als dieses Pokémon, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is always outrageously furious. If it gives chase, it will tenaciously track the target no matter how far.",
	},

	thirdParty: {
		cardmarket: 291623,
		tcgplayer: 121183
	}
}

export default card

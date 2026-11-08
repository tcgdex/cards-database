import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Meganium",
		'fr-fr': "Méganium",
		'es-es': "Meganium",
		'it-it': "Meganium",
		'pt-br': "Meganium",
		'de-de': "Meganie"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium",
		'es-es': "Bayleef",
		'it-it': "Bayleef",
		'pt-br': "Bayleef",
		'de-de': "Lorblatt"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Overgrow",
				'fr-fr': "Engrais",
				'es-es': "Espesura",
				'it-it': "Erbaiuto",
				'pt-br': "Supercrescimento",
				'de-de': "Notdünger"
			},
			effect: {
				'en-us': "If this Pokémon's remaining HP is 50 or less, its attacks do 70 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "S'il reste 50 PV ou moins à ce Pokémon, ses attaques infligent 70 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Si a este Pokémon le quedan 50 PS o menos, sus ataques hacen 70 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Se i PS rimanenti di questo Pokémon diventano 50 o meno, i suoi attacchi infliggono 70 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Se este Pokémon tiver 50 PS restantes ou menos, seus ataques causarão 70 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Wenn dieses Pokémon 50 oder weniger verbliebene KP hat, fügen seine Angriffe dem Aktiven Pokémon deines Gegners 70 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Green Force",
				'fr-fr': "Force Verte",
				'es-es': "Fuerza Verde",
				'it-it': "Verdeforza",
				'pt-br': "Força Verde",
				'de-de': "Pflanzenkraft"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure este Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Meganium's breath has the power to revive dead grass and plants. It can make them healthy again.",
	},

	thirdParty: {
		cardmarket: 288178,
		tcgplayer: 111506
	}
}

export default card

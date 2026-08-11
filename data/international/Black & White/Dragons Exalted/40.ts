import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Ampharos",
		'fr-fr': "Pharamp",
		'es-es': "Ampharos",
		'it-it': "Ampharos",
		'pt-br': "Ampharos",
		'de-de': "Ampharos"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Electromagnetic Wall",
				'fr-fr': "Mur Électromagnétique",
				'es-es': "Muro Electromagnético",
				'it-it': "Magnetomuro",
				'pt-br': "Parede Eletromagnética",
				'de-de': "Elektromagnetischer Wall"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, whenever your opponent attaches an Energy from his or her hand to 1 of his or her Pokémon, put 3 damage counters on that Pokémon.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire attache une Énergie de sa main à 1 de ses Pokémon, placez 3 marqueurs de dégâts sur le Pokémon auquel l’Énergie a été attachée.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, cada vez que tu rival una a 1 de sus Pokémon una Energía de su mano, pon 3 contadores de daño en ese Pokémon.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, ogni volta che il tuo avversario assegna un’Energia dalla sua mano a uno dei suoi Pokémon, metti tre segnalini danno su quel Pokémon.",
				'pt-br': "Enquanto este Pokémon for seu Pokémon Ativo, sempre que seu oponente ligar uma Energia da própria mão a 1 dos Pokémon dele ou dela, coloque 3 marcadores de danos nesse Pokémon.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, lege jedes Mal, wenn dein Gegner 1 Energie von seiner Hand an 1 seiner Pokémon anlegt, 3 Schadensmarken auf Letzteres."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electrobullet",
				'fr-fr': "Électrojectile",
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 70,

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
		'en-us': "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
	},

	thirdParty: {
		cardmarket: 280479,
		tcgplayer: 83547
	}
}

export default card

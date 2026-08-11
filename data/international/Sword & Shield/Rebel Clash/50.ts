import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Inteleon VMAX",
		'fr-fr': "Lézargus VMAX",
		'es-es': "Inteleon VMAX",
		'it-it': "Inteleon VMAX",
		'pt-br': "Inteleon VMAX",
		'de-de': "Intelleon VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	set: Set,

	dexId: [
		888,
	],

	hp: 320,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Inteleon V",
		'fr-fr': "Lézargus-V",
		'es-es': "Inteleon V",
		'it-it': "Inteleon-V",
		'pt-br': "Inteleon V",
		'de-de': "Intelleon-V"
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Hydro Snipe",
				'fr-fr': "Hydro-Frappe",
				'es-es': "Disparo Acuático",
				'it-it': "Idromira",
				'pt-br': "Hidroatirador",
				'de-de': "Hydroschütze"
			},
			effect: {
				'en-us': "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
				'fr-fr': "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
				'es-es': "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
				'it-it': "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
				'pt-br': "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
				'de-de': "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Max Bullet",
				'fr-fr': "Projectilomax",
				'es-es': "Maxibala",
				'it-it': "Dynadardo",
				'pt-br': "Projétil Max",
				'de-de': "Dyna-Kugel"
			},
			effect: {
				'en-us': "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 60 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 456438,
				tcgplayer: 213130
			}
		},
	],
}

export default card

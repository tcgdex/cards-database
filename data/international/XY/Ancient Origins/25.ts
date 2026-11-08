import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Kyurem EX",
		'fr-fr': "Kyurem EX",
		'es-es': "Kyurem EX",
		'it-it': "Kyurem EX",
		'pt-br': "Kyurem EX",
		'de-de': "Kyurem EX"
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Glaciate",
				'fr-fr': "Ère Glaciaire",
				'es-es': "Mundo Gélido",
				'it-it': "Gelamondo",
				'pt-br': "Glaciar",
				'de-de': "Eiszeit"
			},
			effect: {
				'en-us': "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de danos a cada Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Icecalibur",
				'fr-fr': "Glacecalibur",
				'es-es': "Hiexcalibur",
				'it-it': "Algicalibur",
				'pt-br': "Icecalibur",
				'de-de': "Eiscalibur"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon. The Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon. Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Descarta 1 Energía unida a este Pokémon. El Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon. O Pokémon Defensor não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel. Das Verteidigende Pokémon kann während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 284206,
		tcgplayer: 101446
	}
}

export default card

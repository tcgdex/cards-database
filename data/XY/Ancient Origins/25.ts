import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Kyurem EX",
		fr: "Kyurem EX",
		es: "Kyurem EX",
		it: "Kyurem EX",
		pt: "Kyurem EX",
		de: "Kyurem EX"
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
				en: "Glaciate",
				fr: "Ère Glaciaire",
				es: "Mundo Gélido",
				it: "Gelamondo",
				pt: "Glaciar",
				de: "Eiszeit"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 de danos a cada Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				en: "Icecalibur",
				fr: "Glacecalibur",
				es: "Hiexcalibur",
				it: "Algicalibur",
				pt: "Icecalibur",
				de: "Eiscalibur"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon. The Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Défaussez une Énergie attachée à ce Pokémon. Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				es: "Descarta 1 Energía unida a este Pokémon. El Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
				it: "Scarta un'Energia assegnata a questo Pokémon. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				pt: "Descarte uma Energia ligada a este Pokémon. O Pokémon Defensor não poderá atacar durante a próxima vez de jogar do seu oponente.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel. Das Verteidigende Pokémon kann während des nächsten Zuges deines Gegners nicht angreifen."
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

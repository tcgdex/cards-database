import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [1017],
	set: Set,

	name: {
		'en-us': "Wellspring Mask Ogerpon ex",
		'fr-fr': "Ogerpon Masque du Puits-ex",
		'es-es': "Ogerpon Máscara Fuente ex",
		'pt-br': "Ogerpon Máscara Nascente ex",
		'it-it': "Ogerpon Maschera Pozzo-ex",
		'de-de': "Brunnenmaske-Ogerpon-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sob",
			'fr-fr': "Pleurs",
			'es-es': "Sollozar",
			'pt-br': "Chora Mais",
			'it-it': "Pianto",
			'de-de': "Schluchzer"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Torrential Pump",
			'fr-fr': "Pompe Torrentielle",
			'es-es': "Bomba Torrencial",
			'pt-br': "Jato Torrencial",
			'it-it': "Pompa Torrenziale",
			'de-de': "Sintflutpumpe"
		},

		effect: {
			'en-us': "You may shuffle 3 Energy attached to this Pokémon into your deck. If you do, this attack also does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Vous pouvez mélanger 3 Énergies attachées à ce Pokémon avec votre deck. Dans ce cas, cette attaque inflige 120 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Puedes poner 3 Energías unidas a este Pokémon en tu baraja y barajar todas las cartas. Si lo haces, este ataque también hace 120 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Você pode embaralhar 3 Energias ligadas a este Pokémon no seu baralho. Se fizer isto, este ataque também causará 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'it-it': "Puoi rimischiare tre Energie assegnate a questo Pokémon nel tuo mazzo. Se lo fai, questo attacco infligge anche 120 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'de-de': "Du kannst 3 an dieses Pokémon angelegte Energien in dein Deck mischen. Wenn du das machst, fügt diese Attacke auch 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "Yukihiro Tada",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805546,
				tcgplayer: 610507
			}
		},
	],
}

export default card

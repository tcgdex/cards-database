import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [844],
	set: Set,

	name: {
		'en-us': "Hop's Sandaconda",
		'fr-fr': "Dunaconda de Nabil",
		'es-es': "Sandaconda de Paul",
		'de-de': "Hops Sanaconda",
		'it-it': "Sandaconda di Hop",
		'pt-br': "Sandaconda do Lupo",
		'es-mx': "Sandaconda de Paul"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Hop's Silicobra",
		'fr-fr': "Dunaja de Nabil",
		'es-es': "Silicobra de Paul",
		'de-de': "Hops Salanga",
		'it-it': "Silicobra di Hop",
		'pt-br': "Silicobra do Lupo",
		'es-mx': "Silicobra de Paul"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Rumble",
			'fr-fr': "Bagarre",
			'es-es': "Retumbar",
			'de-de': "Grollen",
			'it-it': "Rombo",
			'pt-br': "Estrondo",
			'es-mx': "Retumbar"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Break Ground",
			'fr-fr': "Destructerre",
			'es-es': "Romper Suelo",
			'de-de': "Boden gewinnen",
			'it-it': "Distruggiterra",
			'pt-br': "Quebra Chão",
			'es-mx': "Rompesuelo"
		},

		effect: {
			'en-us': "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "Sanosuke Sakuma",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817239,
				tcgplayer: 623514
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817239,
				tcgplayer: 623514
			}
		},
	],
}

export default card

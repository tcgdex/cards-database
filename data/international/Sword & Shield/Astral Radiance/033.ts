import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [473],
	set: Set,

	name: {
		'en-us': "Mamoswine",
		'fr-fr': "Mammochon",
		'es-es': "Mamoswine",
		'it-it': "Mamoswine",
		'pt-br': "Mamoswine",
		'de-de': "Mamutel"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'it-it': "Piloswine",
		'pt-br': "Piloswine",
		'de-de': "Keifel"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Blizzard",
			'fr-fr': "Blizzard",
			'es-es': "Ventisca",
			'it-it': "Bora",
			'pt-br': "Nevasca",
			'de-de': "Blizzard"
		},

		effect: {
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 80
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Iceberg Press",
			'fr-fr': "Pression Iceberg",
			'es-es': "Presión Iceberg",
			'it-it': "Pressa Iceberg",
			'pt-br': "Iceberg Compressor",
			'de-de': "Eisbergdruck"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon. During your opponent's next turn, the Defending Pokémon can't attack.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon. Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'es-es': "Descarta 1 Energía de este Pokémon. Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'it-it': "Scarta un'Energia da questo Pokémon. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			'pt-br': "Descarte 1 Energia deste Pokémon. Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon can be spotted in wall paintings from as far back as 10,000 years ago. For a while, it was thought to have gone extinct.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658541,
				tcgplayer: 272233
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658541,
				tcgplayer: 272233
			}
		},
	],
}

export default card

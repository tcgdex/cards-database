import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		'en-us': "Kilowattrel",
		'fr-fr': "Fulgulairo",
		'es-es': "Kilowattrel",
		'it-it': "Kilowattrel",
		'pt-br': "Kilowattrel",
		'de-de': "Voltrean"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Wattrel",
		'fr-fr': "Zapétrel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Skill Dive",
			'fr-fr': "Plongeon Contrôlé",
			'es-es': "Técnica de Buceo",
			'it-it': "Agiltuffo",
			'pt-br': "Mergulho Habilidoso",
			'de-de': "Geübter Sturzflug"
		},

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Thunder Blast",
			'fr-fr': "Grondement de Tonnerre",
			'es-es': "Estallido Trueno",
			'it-it': "Tuonobomba",
			'pt-br': "Explosão de Trovões",
			'de-de': "Donnerkeil"
		},

		effect: {
			'en-us': "Discard a {L} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {L} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {L} de este Pokémon.",
			'it-it': "Scarta un'Energia {L} da questo Pokémon.",
			'pt-br': "Descarte uma Energia {L} deste Pokémon.",
			'de-de': "Lege 1 {L}-Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Kilowattrel inflates its throat sac to amplify its electricity. By riding the wind, this Pokémon can fly over 430 miles in a day.",
	},

	thirdParty: {
        cardmarket: 702376,
        tcgplayer: 487935
    }
}

export default card
import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [92],
	set: Set,

	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Mysterious Beam",
			'fr-fr': "Rayon Mystérieux",
			'es-es': "Rayo Misterioso",
			'it-it': "Misticoraggio",
			'pt-br': "Raio Misterioso",
			'de-de': "Seltsamer Strahl"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Suffocating Gas",
			'fr-fr': "Gaz Suffocant",
			'es-es': "Gas Sofocante",
			'it-it': "Gas Soffocante",
			'pt-br': "Gás Asfixiante",
			'de-de': "Würgegas"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760732,
				tcgplayer: 542846
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760732,
				tcgplayer: 542846
			}
		},
	],

	illustrator: "Fujimoto Gold",

}

export default card
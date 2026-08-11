import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Wave",
			'fr-fr': "Cage Éclair",
			'es-es': "Onda Trueno",
			'it-it': "Tuononda",
			'pt-br': "Onda de Trovão",
			'de-de': "Donnerwelle"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal",
			'es-es': "Rayo de Cabeza",
			'it-it': "Zuccalampo",
			'pt-br': "Raio de Cabeça",
			'de-de': "Kopf-Blitz"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608496,
				tcgplayer: 263750
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608496,
				tcgplayer: 263750
			}
		},
	],
}

export default card

import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [137],
	set: Set,

	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Data Displacement",
			'fr-fr': "Déplacement de Données",
			'es-es': "Desplazamiento de Datos",
			'it-it': "Spostamento Dati",
			'pt-br': "Deslocamento de Dados",
			'de-de': "Datenverlagerung"
		},

		effect: {
			'en-us': "Flip a coin. If heads, move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, déplacez une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			'es-es': "Lanza 1 moneda. Si sale cara, mueve 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			'it-it': "Lancia una moneta. Se esce testa, sposta un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			'pt-br': "Jogue uma moeda. Se sair cara, mova uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele.",
			'de-de': "Wirf 1 Münze. Verschiebe bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "In recent years, this species has been very helpful in cyberspace. These Pokémon will go around checking to make sure no suspicious data exists.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740680,
				tcgplayer: 523823,
				cardtrader: 265262
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740680,
				tcgplayer: 523823,
				cardtrader: 265262
			}
		},
	],

	illustrator: "Taiga Kayama",

	
}

export default card

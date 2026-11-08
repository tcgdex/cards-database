import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'de-de': "Fermicula",
		'it-it': "Durant",
		'pt-br': "Durant",
		'es-mx': "Durant"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Crunch",
			'fr-fr': "Mâchouille",
			'es-es': "Triturar",
			'de-de': "Knirscher",
			'it-it': "Sgranocchio",
			'pt-br': "Mastigada",
			'es-mx': "Triturar"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "KEIICHIRO ITO",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817166,
				tcgplayer: 623441
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817166,
				tcgplayer: 623441
			}
		},
	],
}

export default card

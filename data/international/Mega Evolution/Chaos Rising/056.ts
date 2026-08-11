import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "The combination of garbage bags and industrial waste caused the chemical reaction that created this Pokémon.",
	},


	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'es-mx': "Trubbish",
		'de-de': "Unratütox",
		'it-it': "Trubbish",
		'pt-br': "Trubbish"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [568],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Acid Spray",
			'fr-fr': "Bombe Acide",
			'es-es': "Bomba Ácida",
			'es-mx': "Bomba Ácida",
			'de-de': "Säurespeier",
			'it-it': "Acidobomba",
			'pt-br': "Spray Ácido"
		},

		cost: ["Darkness"],
		damage: 10,

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886448,
				tcgplayer: 693557
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886448,
				tcgplayer: 693557
			}
		},
	],
}

export default card

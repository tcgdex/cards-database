import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [916],
	set: Set,

	name: {
		'fr-fr': "Fragroin",
		'en-us': "Oinkologne",
		'es-es': "Oinkologne",
		'it-it': "Oinkologne",
		'pt-br': "Oinkologne",
		'de-de': "Fragrunz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Gourmelet",
		'en-us': "Lechonk",
		'es-es': "Lechonk",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'de-de': "Ferkuli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Fragrance Étourdissante",
			'en-us': "Confounding Cologne",
			'es-es': "Fragancia Desconcertante",
			'it-it': "Profumo Perturbante",
			'pt-br': "Perfume Confuso",
			'de-de': "Verwirrender Duft"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Coup de Pied Impactant",
			'en-us': "High-Impact Kick",
			'es-es': "Patada de Alto Impacto",
			'it-it': "Calcio Dirompente",
			'pt-br': "Chute de Alto Impacto",
			'de-de': "Hochwirksamer Kick"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 60 dégâts.",
			'en-us': "Flip a coin. If tails, this Pokémon also does 60 damage to itself.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este Pokémon também causará 60 pontos de dano a si mesmo.",
			'de-de': "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Oinkologne is proud of its fine, glossy skin. It emits a concentrated scent from the tip of its tail.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725263,
				tcgplayer: 509769,
				cardtrader: 256079
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725263,
				tcgplayer: 509769,
				cardtrader: 256079
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card

import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'es-es': "Vaporeon",
		'pt-br': "Vaporeon",
		'de-de': "Aquana",
		'it-it': "Vaporeon"
	},

	illustrator: "so-taro",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Watery Shroud",
			'fr-fr': "Voile Aquatique",
			'es-es': "Manto Acuoso",
			'pt-br': "Manto d'Água",
			'de-de': "Wasservorhang",
			'it-it': "Velo Acqueo"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
			'es-es': "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, previna todo o dano causado a este Pokémon por ataques (seus e do seu oponente).",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Attacken (deine und die deines Gegners) zugefügt wird.",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco, sia tuo che del tuo avversario."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'es-es': "Hidrobomba",
			'pt-br': "Jato d'Água",
			'de-de': "Hydropumpe",
			'it-it': "Idropompa"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "When Vaporeon's fins begin to vibrate, it is a sign that rain will come within a few hours."
	},

	stage: "Stage1",
	dexId: [134],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 516359
	}
}

export default card

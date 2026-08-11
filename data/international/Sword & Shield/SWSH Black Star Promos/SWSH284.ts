import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,
	illustrator: "Shinji Kanda",
	category: "Pokemon",

	description: {
		'en-us': "The sinister aura that blazes like molten fire around this Pokémon is what inspired the name Moltres."
	},

	stage: "Basic",

	name: {
		'en-us': "Galarian Moltres",
		'fr-fr': "Sulfura de Galar",
		'de-de': "Galar-Lavados",
		'es-es': "Moltres de Galar",
		'pt-br': "Moltres de Galar",
		'it-it': "Moltres di Galar"
	},

	rarity: "Promo",
	dexId: [146],
	hp: 120,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Malevolent Charge",
			'fr-fr': "Charge Maléfique",
			'de-de': "Boshafter Ansturm",
			'es-es': "Carga Malignidad",
			'pt-br': "Carga Malevolente",
			'it-it': "Carica Malvagità"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 {D} Energy cards from your hand to this Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {D} de votre main à ce Pokémon.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 {D}-Energiekarten aus deiner Hand an dieses Pokémon anlegen.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía {D} de tu mano a este Pokémon.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá ligar até 2 cartas de Energia {D} da sua mão a este Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia {D} dalla tua mano."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Fiery Wrath",
			'fr-fr': "Fureur Ardente",
			'de-de': "Brennender Zorn",
			'es-es': "Furia Candente",
			'pt-br': "Fúria Ardente",
			'it-it': "Furia Ardente"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Prize card your opponent has taken.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 50 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni carta Premio presa dal tuo avversario."
		},

		damage: "20+"
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	variants: [
			{
				type: "holo",
			}
		],

	regulationMark: "E",

	thirdParty: {
		tcgplayer: 488275
	}
}

export default card

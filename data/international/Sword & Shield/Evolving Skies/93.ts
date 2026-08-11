import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Galarian Moltres",
		'fr-fr': "Sulfura de Galar",
		'es-es': "Moltres de Galar",
		'it-it': "Moltres di Galar",
		'pt-br': "Moltres de Galar",
		'de-de': "Galar-Lavados"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "Kazuma Koda",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Malevolent Charge",
			'fr-fr': "Charge Maléfique",
			'es-es': "Carga Malignidad",
			'it-it': "Carica Malvagità",
			'pt-br': "Malevolent Charge",
			'de-de': "Boshafter Ansturm"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Darkness Energy cards from your hand to this Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie Darkness de votre main à ce Pokémon.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía Darkness de tu mano a este Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia Darkness dalla tua mano.",
			'pt-br': "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Darkness Energy cards from your hand to this Pokémon.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 Darkness-Energiekarten aus deiner Hand an dieses Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Fiery Wrath",
			'fr-fr': "Fureur Ardente",
			'es-es': "Furia Candente",
			'it-it': "Furia Ardente",
			'pt-br': "Fiery Wrath",
			'de-de': "Brennender Zorn"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Prize card your opponent has taken.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni carta Premio presa dal tuo avversario.",
			'pt-br': "This attack does 50 more damage for each Prize card your opponent has taken.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 50 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "The sinister aura that blazes like molten fire around this Pokémon is what inspired the name Moltres."
	},

	dexId: [146],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574141,
				tcgplayer: 246889
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574141,
				tcgplayer: 246889
			}
		},
	],
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Galarian Moltres",
		fr: "Sulfura de Galar",
		es: "Moltres de Galar",
		it: "Moltres di Galar",
		pt: "Moltres de Galar",
		de: "Galar-Lavados"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "Kazuma Koda",

	abilities: [{
		type: "Ability",

		name: {
			en: "Malevolent Charge",
			fr: "Charge Maléfique",
			es: "Carga Malignidad",
			it: "Carica Malvagità",
			pt: "Malevolent Charge",
			de: "Boshafter Ansturm"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Darkness Energy cards from your hand to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu’à 2 cartes Énergie Darkness de votre main à ce Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía Darkness de tu mano a este Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia Darkness dalla tua mano.",
			pt: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Darkness Energy cards from your hand to this Pokémon.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 Darkness-Energiekarten aus deiner Hand an dieses Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			en: "Fiery Wrath",
			fr: "Fureur Ardente",
			es: "Furia Candente",
			it: "Furia Ardente",
			pt: "Fiery Wrath",
			de: "Brennender Zorn"
		},

		effect: {
			en: "This attack does 50 more damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 50 danni in più per ogni carta Premio presa dal tuo avversario.",
			pt: "This attack does 50 more damage for each Prize card your opponent has taken.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 50 Schadenspunkte mehr zu."
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
		en: "The sinister aura that blazes like molten fire around this Pokémon is what inspired the name Moltres."
	},

	dexId: [146]
}

export default card
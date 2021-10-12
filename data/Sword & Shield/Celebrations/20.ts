import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Dialga",
		fr: "Dialga",
		es: "Dialga",
		it: "Dialga",
		pt: "Dialga",
		de: "Dialga"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			en: "Temporal Backflow",
			fr: "Reflux Temporel",
			es: "Regresión Temporal",
			it: "Riflusso Temporale",
			pt: "Reversão Temporal",
			de: "Zeitlicher Rückfluss"
		},

		effect: {
			en: "Put a card from your discard pile into your hand.",
			fr: "Ajoutez à votre main une carte de votre pile de défausse.",
			es: "Pon 1 carta de tu pila de descartes en tu mano.",
			it: "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
			pt: "Coloque 1 carta da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand."
		},

		cost: ["Metal"]
	}, {
		name: {
			en: "Metal Blast",
			fr: "Explosion Métallique",
			es: "Explosión Metálica",
			it: "Metalbomba",
			pt: "Explosão de Metal",
			de: "Metallexplosion"
		},

		effect: {
			en: "This attack does 20 more damage for each Metal Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía Metal unida a este Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia Metal assegnata a questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia Metal ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Metal-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card
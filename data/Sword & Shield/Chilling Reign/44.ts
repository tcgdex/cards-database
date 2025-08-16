import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [892],
	set: Set,

	name: {
		en: "Rapid Strike Urshifu",
		fr: "Shifours Mille Poings",
		es: "Urshifu Golpe Fluido",
		it: "Urshifu Pluricolpo",
		pt: "Urshifu Golpe Fluido",
		de: "Fließender-Angriff-Wulaosu"
	},

	illustrator: "Naoki Saito",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Kubfu",
		fr: "Wushours",
		es: "Kubfu",
		it: "Kubfu",
		pt: "Kubfu",
		de: "Dakuma"
	},

	attacks: [{
		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
			es: "Garra Cuchillazo",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora",
			de: "Schlitzende Klaue"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Rapid-Fisted Rush",
			fr: "Mille Poings Chargés",
			es: "Embestida de Puño Fluido",
			it: "Pugni Raffica Rapida",
			pt: "Fúria de Punho Rápido",
			de: "Fließende Fäuste"
		},

		effect: {
			en: "This attack does 30 damage for each of your Rapid Strike Pokémon in play.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon Mille Poings en jeu.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon Golpe Fluido en juego.",
			it: "Questo attacco infligge 30 danni per ogni tuo Pokémon Colpo Rapido in gioco.",
			pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon Golpe Fluido em jogo.",
			de: "Diese Attacke fügt für jedes deiner Fließender-Angriff-Pokémon im Spiel 30 Schadenspunkte zu."
		},

		damage: "30×",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "This form of Urshifu is a strong believer in defeating foes by raining many blows down on them. Its strikes are nonstop, flowing like a river."
	}
}

export default card

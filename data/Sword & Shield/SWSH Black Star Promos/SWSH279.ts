import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Lézargus",
		de: "Intelleon",
		es: "Inteleon",
		pt: "Inteleon",
		it: "Inteleon",
		en: "Inteleon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		fr: "Arrozard",
		de: "Phlegleon",
		es: "Drizzile",
		pt: "Drizzile",
		it: "Drizzile",
		en: "Drizzile"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Tir Rapide",
			de: "Schnellschütze",
			es: "Disparo Rápido",
			pt: "Gatilho Rápido",
			it: "Tiro Istantaneo",
			en: "Quick Shooting"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			de: "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen.",
			es: "Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival.",
			pt: "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			it: "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Cascade",
			de: "Kaskade",
			es: "Cascada",
			pt: "Cachoeira",
			it: "Cascata",
			en: "Waterfall"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card
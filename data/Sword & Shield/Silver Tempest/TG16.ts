import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Zeraora V",
		fr: "Zeraora V",
		es: "Zeraora V",
		it: "Zeraora V",
		pt: "Zeraora V",
		de: "Zeraora V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Cross Fist",
			fr: "Poings Croisés",
			es: "Puño Cruzado",
			it: "Pugno Incrociato",
			pt: "Punho Cruzado",
			de: "Cross-Faust"
		},

		effect: {
			en: "If 1 of your other Rapid Strike Pokémon used an attack during your last turn, this attack also does 160 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si l'un de vos autres Pokémon Mille Poings a utilisé une attaque pendant votre dernier tour, cette attaque inflige aussi 160 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Si 1 de tus otros Pokémon Golpe Fluido usó un ataque durante tu último turno, este ataque también hace 160 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Se uno dei tuoi altri Pokémon Colpo Rapido ha usato un attacco durante il tuo ultimo turno, questo attacco infligge anche 160 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon inpanchina.",
			pt: "Se 1 dos seus outros Pokémon Golpe Fluido usou um ataque durante o seu último turno, este ataque também causará 160 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Wenn 1 deiner anderen Fließender-Angriff-Pokémon während deines letzten Zuges eine Attacke eingesetzt hat, fügt diese Attacke auch 1 Pokémon auf der Bank deines Gegners 160 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
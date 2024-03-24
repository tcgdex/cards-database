import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Brambleghast",
		fr: "Virevorreur",
		es: "Brambleghast",
		it: "Brambleghast",
		pt: "Brambleghast"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Resilient Soul",
			fr: "Âme Résiliente",
			es: "Alma Resiliente",
			it: "Anima Tenace",
			pt: "Alma Resiliente"
		},

		effect: {
			en: "This Pokémon gets +50 HP for each Prize card your opponent has taken.",
			fr: "Ce Pokémon reçoit +50 PV pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Este Pokémon obtiene 50 PS más por cada carta de Premio que haya cogido tu rival.",
			it: "Questo Pokémon ha 50 PS in più per ogni carta Premio presa dal tuo avversario.",
			pt: "Este Pokémon recebe 50 PS a mais para cada carta de Prêmio que seu oponente pegou."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Powerful Needles",
			fr: "Piquants Puissants",
			es: "Espinas Poderosas",
			it: "Spine Poderose",
			pt: "Espinhos Poderosos"
		},

		effect: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara."
		},

		damage: "80×"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card
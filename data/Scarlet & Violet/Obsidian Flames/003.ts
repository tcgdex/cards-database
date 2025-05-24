import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [182],
	set: Set,

	name: {
		fr: "Joliflor",
		en: "Bellossom",
		es: "Bellossom",
		it: "Bellossom",
		pt: "Bellossom",
		de: "Blubella"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Poudre Dodo",
			en: "Sleep Powder",
			es: "Somnífero",
			it: "Sonnifero",
			pt: "Pó do Sono",
			de: "Schlafpuder"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 30
	}, {
		cost: ["Grass"],

		name: {
			fr: "Danse Puissante",
			en: "Powerful Dance",
			es: "Danza Poderosa",
			it: "Forzadanza",
			pt: "Dança Poderosa",
			de: "Mächtiger Tanz"
		},

		effect: {
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 90 dégâts pour chaque côté face.",
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 90 damage for each heads.",
			es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 90 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 90 pontos de dano para cada cara.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "sui"
}

export default card
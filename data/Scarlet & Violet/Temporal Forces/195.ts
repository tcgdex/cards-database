import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Scizor ex",
		fr: "Cizayox-ex",
		es: "Scizor ex",
		it: "Scizor-ex",
		pt: "Scizor ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Steel Wing",
			fr: "Ailes d'Acier",
			es: "Ala de Acero",
			it: "Alacciaio",
			pt: "Asa de Aço"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 70
	}, {
		cost: ["Metal", "Metal"],

		name: {
			en: "Cross Breaker",
			fr: "Casse Croisée",
			es: "Destructor Cruzado",
			it: "Distruttore Incrociato",
			pt: "Cruzado Quebrador"
		},

		effect: {
			en: "Discard up to 2 Metal Energy from this Pokémon. This attack does 120 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 2 Énergies Metal de ce Pokémon. Cette attaque inflige 120 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta hasta 2 Energías Metal de este Pokémon. Este ataque hace 120 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta fino a due Energie Metal da questo Pokémon. Questo attacco infligge 120 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte até 2 Energias Metal deste Pokémon. Este ataque causa 120 pontos de dano para cada carta descartada desta forma."
		},

		damage: "120×"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
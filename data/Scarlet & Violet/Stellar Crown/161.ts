import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Medicham ex",
		fr: "Charmina-ex",
		es: "Medicham ex",
		it: "Medicham-ex",
		pt: "Medicham ex",
		de: "Meditalis-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Chi-Atsu",
			fr: "Chi-Atsu",
			es: "Qi-Atsu",
			it: "Chi-Atsu",
			pt: "Chi-Atsu",
			de: "Chi-Atsu"
		},

		effect: {
			en: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 50.",
			fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 50 PV.",
			es: "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 50 PS.",
			it: "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 50.",
			pt: "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 50.",
			de: "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 50 sind."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Yoga Kick",
			fr: "Yoga Kick",
			es: "Patada Yoga",
			it: "Calcio Yoga",
			pt: "Chute Ioga",
			de: "Yogakick"
		},

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			de: "Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert."
		},

		damage: 190
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Swift",
			fr: "Météores",
			es: "Meteoros",
			it: "Comete",
			pt: "Ataque Veloz"
		},

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
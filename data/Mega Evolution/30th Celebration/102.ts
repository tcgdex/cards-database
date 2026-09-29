import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Jirachi ex",
		fr: "Jirachi-ex",
		de: "Jirachi-ex",
		es: "Jirachi ex",
		it: "Jirachi-ex",
		'es-mx': "Jirachi ex",
		pt: "Jirachi ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [385],
	hp: 160,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Wish Granter",
			fr: "Exauceur de Vœux",
			de: "Wunschgewährer",
			es: "Concededeseos",
			it: "Avveradesideri",
			'es-mx': "Cumpledeseos",
			pt: "Conceder Desejo"
		},

		effect: {
			en: "Draw cards until you have 7 cards in your hand.",
			fr: "Piochez des cartes jusqu'à en avoir 7 en main.",
			de: "Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast.",
			es: "Roba cartas hasta tener 7 cartas en tu mano.",
			it: "Pesca fino ad avere sette carte in mano.",
			'es-mx': "Roba cartas hasta que tengas 7 cartas en tu mano.",
			pt: "Compre cartas até ter 7 cartas na sua mão."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Swift",
			fr: "Météores",
			de: "Sternschauer",
			es: "Meteoros",
			it: "Comete",
			'es-mx': "Meteoros",
			pt: "Ataque Veloz"
		},

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Schwäche oder Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'es-mx': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente."
		},

		damage: 150,
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

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907709,
				tcgplayer: 716495
			}
		}
	],
}

export default card

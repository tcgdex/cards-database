import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [539],
	set: Set,

	name: {
		en: "Sawk",
		fr: "Karaclée",
		de: "Karadonis",
		it: "Sawk",
		pt: "Sawk",
		es: "Sawk",
		'es-mx': "Sawk"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Elbow Strike",
			fr: "Coup de Coude",
			de: "Ellbogenstoß",
			it: "Colpogomito",
			pt: "Golpe de Cotovelo",
			es: "Codazo",
			'es-mx': "Codazo"
		},

		damage: 30
	}, {
		cost: ["Fighting"],

		name: {
			en: "Rising Chop",
			fr: "Poing Ascendant",
			de: "Aufwärtshieb",
			it: "Colpo Ascendente",
			pt: "Golpe Ascendente",
			es: "Golpe Ascendente",
			'es-mx': "Golpe Ascendente"
		},

		effect: {
			en: "If your opponent's Active Pokémon isn't a Pokémon ex, this attack does nothing. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Si le Pokémon Actif de votre adversaire n'est pas un Pokémon-ex, cette attaque ne fait rien. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			de: "Wenn das Aktive Pokémon deines Gegners kein Pokémon-ex ist, hat diese Attacke keine Auswirkungen. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert.",
			it: "Se il Pokémon attivo del tuo avversario non è un Pokémon-ex, questo attacco non ha effetto. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			pt: "Se o Pokémon Ativo do seu oponente não for um Pokémon ex, este ataque não fará nada. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			es: "Si el Pokémon Activo de tu rival no es un Pokémon ex, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'es-mx': "Si el Pokémon Activo de tu rival no es un Pokémon ex, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card
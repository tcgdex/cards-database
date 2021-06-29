import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Mawile",
		fr: "Mysdibule",
		es: "Mawile",
		it: "Mawile",
		pt: "Mawile",
		de: "Flunkifer"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Powerful Vise",
			fr: "Étau Costaud",
			es: "Agarre Poderoso",
			it: "Morsa Portentosa",
			pt: "Compressão Potente",
			de: "Kraftklammer"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			en: "Piercing Strike",
			fr: "Coup Transperçant",
			es: "Impacto Penetrante",
			it: "Perforacolpo",
			pt: "Golpe Perfurante",
			de: "Durchbohrender Schlag"
		},

		effect: {
			en: "This attack’s damage isn’t affected by Weakness or Resistance, or by any effects on your opponent’s Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 100,
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
	regulationMark: "E"
}

export default card
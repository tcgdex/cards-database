import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [621],
	set: Set,

	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
		de: "Shardrago",
		it: "Druddigon",
		pt: "Druddigon",
		es: "Druddigon",
		'es-mx': "Druddigon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Shred",
			fr: "Déchiquetage",
			de: "Zerfetzer",
			it: "Tritatutto",
			pt: "Triturar",
			es: "Hacer Trizas",
			'es-mx': "Despedazar"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 40
	}, {
		cost: ["Fire", "Water", "Colorless"],

		name: {
			en: "Ambush",
			fr: "Embuscade",
			de: "Hinterhalt",
			it: "Imboscata",
			pt: "Emboscada",
			es: "Emboscada",
			'es-mx': "Emboscada"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card
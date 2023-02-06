import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Zacian V",
		fr: "Zacian V",
		es: "Zacian V",
		it: "Zacian V",
		pt: "Zacian V",
		de: "Zacian V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Piercing Strike",
			fr: "Coup Transperçant",
			es: "Impacto Penetrante",
			it: "Perforacolpo",
			pt: "Golpe Perfurante",
			de: "Durchbohrender Schlag"
		},

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 40
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Behemoth Blade",
			fr: "Gladius Maximus",
			es: "Tajo Supremo",
			it: "Taglio Maestoso",
			pt: "Espada Colossal",
			de: "Gigantenhieb"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 160 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 160 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 160 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 160 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, este ataque causará 160 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Zacian VSTAR",
		fr: "Zacian VSTAR",
		es: "Zacian V-ASTRO",
		it: "Zacian V ASTRO",
		pt: "Zacian V-ASTRO",
		de: "Zacian VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],

	evolveFrom: {
		en: "Zacian V",
		fr: "Zacian-V",
		es: "Zacian V",
		it: "Zacian-V",
		pt: "Zacian V",
		de: "Zacian-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Break Edge",
			fr: "Brise-Lame",
			es: "Filo Rompedor",
			it: "Frangilama",
			pt: "Gume Destruidor",
			de: "Brechklinge"
		},

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 200
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			en: "Sword Star",
			fr: "Star Épée",
			es: "Astro Espada",
			it: "Astro Spada",
			pt: "Espada Astral",
			de: "Schwertstern"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Questo Pokémon infligge anche 30 danni a se stesso. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: 310
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691815
	}
}

export default card

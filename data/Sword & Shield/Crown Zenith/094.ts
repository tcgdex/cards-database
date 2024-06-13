import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		en: "Zacian",
		fr: "Zacian",
		es: "Zacian",
		it: "Zacian",
		pt: "Zacian",
		de: "Zacian"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Battle Legion",
			fr: "Légion de Combat",
			es: "Legión de Combate",
			it: "Legione d'Assalto",
			pt: "Legião de Batalha",
			de: "Heerschar"
		},

		effect: {
			en: "This attack does 10 more damage for each of your Benched Pokémon. This attack's damage isn't affected by Weakness or by any effects on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 10 puntos de daño más por cada uno de tus Pokémon en Banca. El daño de este ataque no se ve afectado por Debilidad o por ningún efecto en el Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua panchina. I danni di questo attacco non sono influenzati dalla debolezza o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada Pokémon no seu Banco. O dano deste ataque não é afetado por Fraqueza ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 10 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: "20+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
			es: "Cuchilla Cortante",
			it: "Affettalama",
			pt: "Lâmina Fatiante",
			de: "Schwertschneide"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [151],
	set: Set,

	name: {
		en: "Mew VMAX",
		fr: "Mew VMAX",
		es: "Mew VMAX",
		it: "Mew VMAX",
		pt: "Mew VMAX",
		de: "Mew VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		en: "Mew V",
		fr: "Mew-V",
		es: "Mew V",
		it: "Mew-V",
		pt: "Mew V",
		de: "Mew-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Cross Fusion Strike",
			fr: "Poing de Fusion Croisé",
			es: "Golpe Fusión Cruzado",
			it: "Colpo Fusione Incrociato",
			pt: "Golpe Fusão Cruzado",
			de: "Cross-Fusionsangriff"
		},

		effect: {
			en: "Choose 1 of your Benched Fusion Strike Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques de vos Pokémon Poing de Fusion de Banc et utilisez-la en tant que cette attaque.",
			es: "Elige 1 de los ataques de tus Pokémon Golpe Fusión en Banca y úsalo para este ataque.",
			it: "Scegli un attacco di un Pokémon Colpo Fusione nella tua panchina e usalo al posto di questo attacco.",
			pt: "Escolha 1 dos ataques dos seus Pokémon Golpe Fusão no Banco e use-o como este ataque.",
			de: "Wähle 1 Attacke der Fusionsangriff-Pokémon auf deiner Bank und setze sie als diese Attacke ein."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Max Miracle",
			fr: "Miraclomax",
			es: "Maximilagro",
			it: "Dynaprodigio",
			pt: "Milagre Max",
			de: "Dyna-Wunder"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 130
	}],

	retreat: 0,
	regulationMark: "E",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674245
	}
}

export default card
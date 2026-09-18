import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Mew VMAX",
		fr: "Mew-VMAX",
		de: "Mew-VMAX",
		es: "Mew VMAX",
		it: "Mew-VMAX",
		pt: "Mew VMAX",
		'es-mx': "Mew VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			en: "Cross Fusion Strike",
			fr: "Poing de Fusion Croisé",
			de: "Cross-Fusionsangriff",
			es: "Golpe Fusión Cruzado",
			it: "Colpo Fusione Incrociato",
			pt: "Golpe Fusão Cruzado",
			'es-mx': "Golpe Fusión Cruzado"
		},

		effect: {
			en: "Choose 1 of your Benched Fusion Strike Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques de vos Pokémon Poing de Fusion de Banc et utilisez-la en tant que cette attaque.",
			de: "Wähle 1 Attacke der Fusionsangriff-Pokémon auf deiner Bank und setze sie als diese Attacke ein.",
			es: "Elige 1 de los ataques de tus Pokémon Golpe Fusión en Banca y úsalo para este ataque.",
			it: "Scegli un attacco di un Pokémon Colpo Fusione nella tua panchina e usalo al posto di questo attacco.",
			pt: "Escolha 1 dos ataques dos seus Pokémon Golpe Fusão no Banco e use-o como este ataque.",
			'es-mx': "Elige 1 de los ataques de tus Pokémon Golpe Fusión en Banca y úsalo como este ataque."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Max Miracle",
			fr: "Miraclomax",
			de: "Dyna-Wunder",
			es: "Maximilagro",
			it: "Dynaprodigio",
			pt: "Milagre Max",
			'es-mx': "Maximilagro"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 130,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907966,
				tcgplayer: 716207
			}
		}
	],
}

export default card
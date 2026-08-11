import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [151],
	set: Set,

	name: {
		'en-us': "Mew VMAX",
		'fr-fr': "Mew VMAX",
		'es-es': "Mew VMAX",
		'it-it': "Mew VMAX",
		'pt-br': "Mew VMAX",
		'de-de': "Mew VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Mew V",
		'fr-fr': "Mew-V",
		'es-es': "Mew V",
		'it-it': "Mew-V",
		'pt-br': "Mew V",
		'de-de': "Mew-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Cross Fusion Strike",
			'fr-fr': "Poing de Fusion Croisé",
			'es-es': "Golpe Fusión Cruzado",
			'it-it': "Colpo Fusione Incrociato",
			'pt-br': "Golpe Fusão Cruzado",
			'de-de': "Cross-Fusionsangriff"
		},

		effect: {
			'en-us': "Choose 1 of your Benched Fusion Strike Pokémon's attacks and use it as this attack.",
			'fr-fr': "Choisissez l'une des attaques de vos Pokémon Poing de Fusion de Banc et utilisez-la en tant que cette attaque.",
			'es-es': "Elige 1 de los ataques de tus Pokémon Golpe Fusión en Banca y úsalo para este ataque.",
			'it-it': "Scegli un attacco di un Pokémon Colpo Fusione nella tua panchina e usalo al posto di questo attacco.",
			'pt-br': "Escolha 1 dos ataques dos seus Pokémon Golpe Fusão no Banco e use-o como este ataque.",
			'de-de': "Wähle 1 Attacke der Fusionsangriff-Pokémon auf deiner Bank und setze sie als diese Attacke ein."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Max Miracle",
			'fr-fr': "Miraclomax",
			'es-es': "Maximilagro",
			'it-it': "Dynaprodigio",
			'pt-br': "Milagre Max",
			'de-de': "Dyna-Wunder"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 130
	}],

	retreat: 0,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 674245,
				tcgplayer: 284303
			}
		},
	],
}

export default card

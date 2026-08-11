import { Card } from "models/database/card"
import Set from "../Fusion Strike"

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

	rarity: "Holo Rare VMAX",
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
	retreat: 0,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Cross Fusion Strike",
			'fr-fr': "Poing de Fusion Croisé",
			'es-es': "Golpe Fusión Cruzado",
			'it-it': "Colpo Fusione Incrociato",
			'de-de': "Cross-Fusionsangriff",
			'pt-br': "Golpe Fusão Cruzado"
		},

		effect: {
			'en-us': "Choose 1 of your Benched Fusion Strike Pokémon's attacks and use it as this attack.",
			'fr-fr': "Choisissez l'une des attaques de vos Pokémon Poing de Fusion de Banc et utilisez-la en tant que cette attaque.",
			'es-es': "Elige 1 de los ataques de tus Pokémon Golpe Fusión en Banca y úsalo para este ataque.",
			'it-it': "Scegli un attacco di un Pokémon Colpo Fusione nella tua panchina e usalo al posto di questo attacco.",
			'de-de': "Wähle 1 Attacke der Fusionsangriff-Pokémon auf deiner Bank und setze sie als diese Attacke ein.",
			'pt-br': "Escolha 1 dos ataques dos seus Pokémon Golpe Fusão no Banco e use-o como este ataque."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Max Miracle",
			'fr-fr': "Miraclomax",
			'es-es': "Maximilagro",
			'it-it': "Dynaprodigio",
			'de-de': "Dyna-Wunder",
			'pt-br': "Milagre Max"
		},

		damage: 130,

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582613,
				tcgplayer: 253275
			}
		},
	],
}

export default card

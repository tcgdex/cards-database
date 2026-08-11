import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Block",
			'fr-fr': "Barrage",
			'es-es': "Bloqueo",
			'it-it': "Blocco",
			'pt-br': "Bloquear",
			'de-de': "Rückentzug"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon can't retreat.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, el Pokémon Activo de tu rival no puede retirarse.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il Pokémon attivo del tuo avversario non può ritirarsi.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, o Pokémon Ativo do seu oponente não poderá recuar.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann sich das Aktive Pokémon deines Gegners nicht zurückziehen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Collapse",
			'fr-fr': "Effondrement",
			'es-es': "Colapso",
			'it-it': "Collassare",
			'pt-br': "Colapso",
			'de-de': "Kollaps"
		},

		effect: {
			'en-us': "This Pokémon is now Asleep.",
			'fr-fr': "Ce Pokémon est maintenant Endormi.",
			'es-es': "Este Pokémon pasa a estar Dormido.",
			'it-it': "Questo Pokémon viene addormentato.",
			'pt-br': "Este Pokémon agora está Adormecido.",
			'de-de': "Dieses Pokémon schläft jetzt."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665278,
				tcgplayer: 276974
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665278,
				tcgplayer: 276974
			}
		},
	],
}

export default card

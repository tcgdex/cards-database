import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Block",
			fr: "Barrage",
			es: "Bloqueo",
			it: "Blocco",
			pt: "Bloquear",
			de: "Rückentzug"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon can't retreat.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
			es: "Mientras este Pokémon esté en el Puesto Activo, el Pokémon Activo de tu rival no puede retirarse.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il Pokémon attivo del tuo avversario non può ritirarsi.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, o Pokémon Ativo do seu oponente não poderá recuar.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann sich das Aktive Pokémon deines Gegners nicht zurückziehen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Collapse",
			fr: "Effondrement",
			es: "Colapso",
			it: "Collassare",
			pt: "Colapso",
			de: "Kollaps"
		},

		effect: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
			es: "Este Pokémon pasa a estar Dormido.",
			it: "Questo Pokémon viene addormentato.",
			pt: "Este Pokémon agora está Adormecido.",
			de: "Dieses Pokémon schläft jetzt."
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

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	description: {
		en: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
	},

	thirdParty: {
		cardmarket: 664610,
		tcgplayer: 276974
	}
}

export default card

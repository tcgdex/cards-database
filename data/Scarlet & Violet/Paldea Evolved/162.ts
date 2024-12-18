import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [289],
	set: Set,

	name: {
		fr: "Monaflèmit",
		en: "Slaking",
		es: "Slaking",
		it: "Slaking",
		pt: "Slaking",
		de: "Letarking"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Sommeil Lourd",
			en: "Stir and Snooze",
			es: "Vuelta y Cabezadita",
			it: "Lasciadormir",
			pt: "Agitar e Acalmar",
			de: "Umdrehen und Dösen"
		},

		effect: {
			fr: "Si ce Pokémon est Endormi, lancez 2 pièces au lieu d'une lors du Contrôle Pokémon. Si vous obtenez au moins un côté pile, ce Pokémon reste Endormi.",
			en: "If this Pokémon is Asleep, flip 2 coins instead of 1 during Pokémon Checkup. If either of them is tails, this Pokémon is still Asleep.",
			es: "Si este Pokémon está Dormido, lanza 2 monedas en vez de una durante el Chequeo Pokémon. Si sale cruz en alguna de ellas, este Pokémon sigue Dormido.",
			it: "Se questo Pokémon è addormentato, lancia due volte una moneta invece di una durante il controllo Pokémon. Se esce almeno una volta croce, questo Pokémon resta addormentato.",
			pt: "Se este Pokémon estiver Adormecido, jogue 2 moedas ao invés de 1 durante o Checape Pokémon. Se qualquer uma delas sair coroa, este Pokémon permanecerá Adormecido.",
			de: "Wenn dieses Pokémon schläft, wirf beim Pokémon-Check 2 Münzen anstelle von 1. Zeigt mindestens 1 Zahl, schläft dieses Pokémon weiter."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Coup de Tête Paresseux",
			en: "Slacker's Headstrike",
			es: "Cabezazo del Holgazán",
			it: "Testata del Fannullone",
			pt: "Golpe de Cabeça Preguiçoso",
			de: "Lethargischer Kopftreffer"
		},

		effect: {
			fr: "Ce Pokémon est maintenant Endormi.",
			en: "This Pokémon is now Asleep.",
			es: "Este Pokémon pasa a estar Dormido.",
			it: "Questo Pokémon viene addormentato.",
			pt: "Este Pokémon agora está Adormecido.",
			de: "Dieses Pokémon schläft jetzt."
		},

		damage: 240
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
		es: "Vigoroth",
		it: "Vigoroth",
		pt: "Vigoroth",
		de: "Muntier"
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [286],
	set: Set,

	name: {
		en: "Breloom",
		fr: "Chapignon",
		es: "Breloom",
		it: "Breloom",
		pt: "Breloom",
		de: "Kapilz"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
		es: "Shroomish",
		it: "Shroomish",
		pt: "Shroomish",
		de: "Knilz"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Spore Ball",
			fr: "Boule de Spores",
			es: "Bola Espora",
			it: "Pallaspore",
			pt: "Bola de Esporos",
			de: "Sporenbällchen"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 30
	}, {
		cost: ["Grass"],

		name: {
			en: "Powdery Uppercut",
			fr: "Uppercut Poudreux",
			es: "Gancho Pulverizador",
			it: "Montante Pulviscolare",
			pt: "Gancho Espoderoso",
			de: "Pudriger Kinnhaken"
		},

		effect: {
			en: "You can use this attack only if this Pokémon used Spore Ball during your last turn.",
			fr: "Vous ne pouvez utiliser cette attaque que si ce Pokémon a utilisé Boule de Spores pendant votre dernier tour.",
			es: "Puedes usar este ataque solo si este Pokémon usó Bola Espora durante tu último turno.",
			it: "Puoi usare questo attacco solo se questo Pokémon ha usato Pallaspore durante il tuo ultimo turno.",
			pt: "Você só poderá usar este ataque se este Pokémon usou Bola de Esporos durante o seu último turno.",
			de: "Du kannst diese Attacke nur einsetzen, wenn dieses Pokémon während deines letzten Zuges Sporenbällchen eingesetzt hat."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608428,
		tcgplayer: 263583
	}
}

export default card
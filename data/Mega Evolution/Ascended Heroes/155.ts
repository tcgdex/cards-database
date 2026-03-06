import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [644],

	name: {
		en: "N's Zekrom",
		fr: "Zekrom de N",
		es: "Zekrom de N",
		'es-mx': "Zekrom de N",
		de: "Ns Zekrom",
		it: "Zekrom di N",
		pt: "Zekrom do N"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Shred",
			fr: "Déchiquetage",
			es: "Hacer Trizas",
			'es-mx': "Despedazar",
			de: "Zerfetzer",
			it: "Tritatutto",
			pt: "Triturar"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente."
		},

		damage: 70
	}, {
		cost: ["Fire", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Rampaging Thunder",
			fr: "Tonnerre Saccageur",
			es: "Furia Trueno",
			'es-mx': "Trueno Arrasador",
			de: "Wütender Donner",
			it: "Tuono Impazzito",
			pt: "Trovão Voraz"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 250
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675967,
		cardmarket: 869766
	}
}

export default card
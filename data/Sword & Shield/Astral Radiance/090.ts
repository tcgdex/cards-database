import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Overqwil",
		fr: "Qwilpik de Hisui",
		es: "Overqwil de Hisui",
		it: "Overqwil di Hisui",
		pt: "Overqwil de Hisui",
		de: "Hisui-Myriador"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Hisuian Qwilfish",
		fr: "Qwilfish de Hisui",
		es: "Qwilfish de Hisui",
		it: "Qwilfish di Hisui",
		pt: "Qwilfish de Hisui",
		de: "Hisui-Baldorfish"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tormenting Poison",
			fr: "Poison Tourmente",
			es: "Veneno Tormento",
			it: "Veleno Spietato",
			pt: "Veneno Atormentador",
			de: "Peinigendes Gift"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 5 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 5 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 5 contadores de daño en vez de 1 en ese Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti cinque segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 5 contadores de dano ao invés de 1 naquele Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 5 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Pinning",
			fr: "Immobilisation",
			es: "Clavado",
			it: "Inchiodare",
			pt: "Alfinetar",
			de: "Aufspießen"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [454],
	set: Set,

	name: {
		en: "Toxicroak",
		fr: "Coatox",
		es: "Toxicroak",
		it: "Toxicroak",
		pt: "Toxicroak",
		de: "Toxiquak"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
		es: "Croagunk",
		it: "Croagunk",
		pt: "Croagunk",
		de: "Glibunkel"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Masakazu Fukuda",

	description: {
		en: "It booms out a victory croak when its prey goes down in defeat. This Pokémon and Seismitoad are related species."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Severe Poison",
			fr: "Poison Violent",
			de: "Pures Gift",
			es: "Veneno Grave",
			pt: "Veneno Forte",
			it: "Maloveleno"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 4 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 4 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 4 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 4 contadores de daño en ese Pokémon en vez de 1.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 4 contadores de dano ao invés de 1 naquele Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti quattro segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Magnum Punch",
			fr: "Poing Magnum",
			de: "Magnum-Schlag",
			es: "Puño Magnum",
			pt: "Soco Magnum",
			it: "Superpugno"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582794,
		tcgplayer: 253380
	}
}

export default card
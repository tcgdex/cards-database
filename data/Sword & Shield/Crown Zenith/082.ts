import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [691],
	set: Set,

	name: {
		en: "Dragalge",
		fr: "Kravarech",
		es: "Dragalge",
		it: "Dragalge",
		pt: "Dragalge",
		de: "Tandrak"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
		es: "Skrelp",
		it: "Skrelp",
		pt: "Skrelp",
		de: "Algitt"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Rocket Poison",
			fr: "Poison Express",
			es: "Veneno a Propulsión",
			it: "Velenorazzo",
			pt: "Veneno a Jato",
			de: "Raketengift"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. If this Pokémon evolved from Skrelp during this turn, put 8 damage counters on that Pokémon instead of 1 during Pokémon Checkup.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Si ce Pokémon a évolué de Venalgue pendant ce tour, placez 8 marqueurs de dégâts sur ce Pokémon-là au lieu d'un pendant le Contrôle Pokémon.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Si este Pokémon ha evolucionado de Skrelp durante este turno, pon 8 contadores de daño en vez de 1 en ese Pokémon durante el Chequeo Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Se questo Pokémon si è evoluto da Skrelp durante questo turno, metti otto segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Se este Pokémon evoluiu de Skrelp durante este turno, coloque 8 contadores de dano ao invés de 1 naquele Pokémon durante o Checape Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Wenn sich dieses Pokémon während dieses Zuges aus Algitt entwickelt hat, lege beim Pokémon-Check 8 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Razor Fin",
			fr: "Aileron-Rasoir",
			es: "Aleta Afilada",
			it: "Pinnalama",
			pt: "Barbatana Cortante",
			de: "Rasierflosse"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
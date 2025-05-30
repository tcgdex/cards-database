import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Nidoking ex",
		fr: "Nidoking-ex de la Team Rocket",
		de: "Team Rockets Nidoking-ex",
		it: "Nidoking-ex del Team Rocket",
		es: "Nidoking ex del Team Rocket",
		pt: "Nidoking ex da Equipe Rocket",
		'es-mx': "Nidoking ex del Equipo Rocket"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Tainted Horn",
			fr: "Corne Contaminante",
			de: "Vergiftetes Horn",
			it: "Corno Contaminato",
			es: "Cuerno Contaminado",
			pt: "Chifre Contaminado",
			'es-mx': "Cuerno Contaminado"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 8 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 8 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 8 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti otto segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 8 contadores de daño en vez de uno en ese Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 8 contadores de dano ao invés de 1 naquele Pokémon.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado. Durante el Chequeo Pokémon, pon 8 contadores de daño en lugar de 1 en ese Pokémon."
		},

		damage: 100
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			en: "Kingly Impact",
			fr: "Impact Royal",
			de: "Königlicher Einschlag",
			it: "Impatto Regale",
			es: "Impacto Regio",
			pt: "Impacto Majestoso",
			'es-mx': "Impacto Real"
		},

		damage: 240
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card
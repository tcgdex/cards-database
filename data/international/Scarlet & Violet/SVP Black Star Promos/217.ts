import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Nidoking ex",
		'fr-fr': "Nidoking-ex de la Team Rocket",
		'de-de': "Team Rockets Nidoking-ex",
		'it-it': "Nidoking-ex del Team Rocket",
		'es-es': "Nidoking ex del Team Rocket",
		'pt-br': "Nidoking ex da Equipe Rocket"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [34],
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Team Rocket's Nidorino",
		'fr-fr': "Nidorino de la Team Rocket",
		'de-de': "Team Rockets Nidorino",
		'it-it': "Nidorino del Team Rocket",
		'es-es': "Nidorino del Team Rocket",
		'es-mx': "Nidorino del Equipo Rocket",
		'pt-br': "Nidorino da Equipe Rocket"
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Tainted Horn",
			'fr-fr': "Corne Contaminante",
			'de-de': "Vergiftetes Horn",
			'it-it': "Corno Contaminato",
			'es-es': "Cuerno Contaminado",
			'pt-br': "Chifre Contaminado"
	},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 8 damage counters on that Pokémon instead of 1.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 8 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 8 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti otto segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 8 contadores de daño en vez de uno en ese Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 8 contadores de dano ao invés de 1 naquele Pokémon."
	},

		damage: 100
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Kingly Impact",
			'fr-fr': "Impact Royal",
			'de-de': "Königlicher Einschlag",
			'it-it': "Impatto Regale",
			'es-es': "Impacto Regio",
			'pt-br': "Impacto Majestoso"
	},

		damage: 240
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 832226,
				tcgplayer: 653258
			},
		}
	]
}

export default card

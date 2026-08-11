import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [904],
	set: Set,

	name: {
		'en-us': "Hisuian Overqwil",
		'fr-fr': "Qwilpik de Hisui",
		'es-es': "Overqwil de Hisui",
		'it-it': "Overqwil di Hisui",
		'pt-br': "Overqwil de Hisui",
		'de-de': "Hisui-Myriador"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Hisuian Qwilfish",
		'fr-fr': "Qwilfish de Hisui",
		'es-es': "Qwilfish de Hisui",
		'it-it': "Qwilfish di Hisui",
		'pt-br': "Qwilfish de Hisui",
		'de-de': "Hisui-Baldorfish"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Tormenting Poison",
			'fr-fr': "Poison Tourmente",
			'es-es': "Veneno Tormento",
			'it-it': "Veleno Spietato",
			'pt-br': "Veneno Atormentador",
			'de-de': "Peinigendes Gift"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 5 damage counters on that Pokémon instead of 1.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 5 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 5 contadores de daño en vez de 1 en ese Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti cinque segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 5 contadores de dano ao invés de 1 naquele Pokémon.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 5 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Pinning",
			'fr-fr': "Immobilisation",
			'es-es': "Clavado",
			'it-it': "Inchiodare",
			'pt-br': "Alfinetar",
			'de-de': "Aufspießen"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Its lancelike spikes and savage temperament have earned it the nickname \"sea fiend.\" It slurps up poison to nourish itself.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658714,
				tcgplayer: 272291
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658714,
				tcgplayer: 272291
			}
		},
	],
}

export default card

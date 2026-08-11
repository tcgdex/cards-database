import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [171],
	set: Set,

	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'es-es': "Lanturn",
		'it-it': "Lanturn",
		'pt-br': "Lanturn",
		'de-de': "Lanturn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Disorienting Flash",
			'fr-fr': "Flash Désorientant",
			'es-es': "Destello Aturdidor",
			'it-it': "Flash Disorientante",
			'pt-br': "Clarão Atordoante",
			'de-de': "Desorientierender Blitz"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused. Put 8 damage counters instead of 3 on that Pokémon for this Special Condition.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Placez 8 marqueurs de dégâts au lieu de 3 sur ce Pokémon-là pour cet État Spécial.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Pon 8 contadores de daño en vez de 3 en ese Pokémon por esta Condición Especial.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Metti otto segnalini danno invece di tre su quel Pokémon per effetto di questa condizione speciale.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Coloque 8 contadores de dano ao invés de 3 naquele Pokémon para esta Condição Especial.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Lege für diesen Speziellen Zustand 8 Schadensmarken anstelle von 3 Schadensmarken auf jenes Pokémon."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Thunderous Bolt",
			'fr-fr': "Éclair du Tonnerre",
			'es-es': "Rayo Atronador",
			'it-it': "Fulmine Tonante",
			'pt-br': "Raio Estrondoso",
			'de-de': "Donnernder Einschlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785903,
				tcgplayer: 567275
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785903,
				tcgplayer: 567275
			}
		},
	],

	illustrator: "Akira Komayama",

}

export default card

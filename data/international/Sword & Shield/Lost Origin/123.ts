import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [903],
	set: Set,

	name: {
		'en-us': "Radiant Hisuian Sneasler",
		'fr-fr': "Farfurex de Hisui Radieux",
		'es-es': "Sneasler de Hisui Radiante",
		'it-it': "Sneasler di Hisui Lucente",
		'pt-br': "Sneasler de Hisui Radiante",
		'de-de': "Strahlendes Hisui-Snieboss"
	},

	illustrator: "Akira Komayama",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Poison Peak",
			'fr-fr': "Pic Empoisonné",
			'es-es': "Pico Veneno",
			'it-it': "Cima Velenosa",
			'pt-br': "Veneno Culminante",
			'de-de': "Giftgipfel"
		},

		effect: {
			'en-us': "During Pokémon Checkup, put 2 more damage counters on your opponent's Poisoned Pokémon.",
			'fr-fr': "Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés de votre adversaire.",
			'es-es': "Durante el Chequeo Pokémon, pon 2 contadores de daño más en el Pokémon Envenenado de tu rival.",
			'it-it': "Metti altri due segnalini danno sui Pokémon avvelenati del tuo avversario durante il controllo Pokémon.",
			'pt-br': "Durante o Checape Pokémon, coloque 2 contadores de dano a mais nos Pokémon Envenenados do seu oponente.",
			'de-de': "Lege beim Pokémon-Check 2 Schadensmarken mehr auf die vergifteten Pokémon deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Poison Jab",
			'fr-fr': "Direct Toxik",
			'es-es': "Puya Nociva",
			'it-it': "Velenpuntura",
			'pt-br': "Golpe Envenenado",
			'de-de': "Gifthieb"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674136,
				tcgplayer: 284031
			}
		},
	],
}

export default card

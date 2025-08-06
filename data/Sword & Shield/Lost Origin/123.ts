import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Hisuian Sneasler",
		fr: "Farfurex de Hisui Radieux",
		es: "Sneasler de Hisui Radiante",
		it: "Sneasler di Hisui Lucente",
		pt: "Sneasler de Hisui Radiante",
		de: "Strahlendes Hisui-Snieboss"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Poison Peak",
			fr: "Pic Empoisonné",
			es: "Pico Veneno",
			it: "Cima Velenosa",
			pt: "Veneno Culminante",
			de: "Giftgipfel"
		},

		effect: {
			en: "During Pokémon Checkup, put 2 more damage counters on your opponent's Poisoned Pokémon.",
			fr: "Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés de votre adversaire.",
			es: "Durante el Chequeo Pokémon, pon 2 contadores de daño más en el Pokémon Envenenado de tu rival.",
			it: "Metti altri due segnalini danno sui Pokémon avvelenati del tuo avversario durante il controllo Pokémon.",
			pt: "Durante o Checape Pokémon, coloque 2 contadores de dano a mais nos Pokémon Envenenados do seu oponente.",
			de: "Lege beim Pokémon-Check 2 Schadensmarken mehr auf die vergifteten Pokémon deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
			es: "Puya Nociva",
			it: "Velenpuntura",
			pt: "Golpe Envenenado",
			de: "Gifthieb"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674136,
		tcgplayer: 284031
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowking VMAX",
		fr: "Roigada de Galar VMAX",
		es: "Slowking de Galar VMAX",
		it: "Slowking di Galar VMAX",
		pt: "Slowking de Galar VMAX",
		de: "Galar-Laschoking VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Slowking V",
		fr: "Roigada de Galar-V",
		es: "Slowking de Galar V",
		it: "Slowking di Galar-V",
		pt: "Slowking de Galar V",
		de: "Galar-Laschoking-V"
	},

	attacks: [{
		name: {
			en: "Max Toxify",
			fr: "Toxomax",
			es: "Maxitoxicidad",
			it: "Dynatossicità",
			pt: "Intoxicação Max",
			de: "Dyna-Vergiftung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 12 damage counters on that Pokémon instead of 1.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 12 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 12 contadores de daño en ese Pokémon en vez de 1.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Metti 12 segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 12 contadores de dano ao invés de 1 naquele Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 12 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		},

		damage: 10,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 567208
	}
}

export default card

import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [89],
	set: Set,

	name: {
		'en-us': "Muk",
		'fr-fr': "Grotadmorv",
		'es-es': "Muk",
		'it-it': "Muk",
		'pt-br': "Muk",
		'de-de': "Sleimok"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Poison Sacs",
			'fr-fr': "Sacs de Poison",
			'es-es': "Sacos de Veneno",
			'it-it': "Sacche Velenose",
			'pt-br': "Bolsas de Veneno",
			'de-de': "Gifttaschen"
		},

		effect: {
			'en-us': "Your opponent's Poisoned Pokémon don't recover from that Special Condition when they evolve or devolve.",
			'fr-fr': "Les Pokémon Empoisonnés de votre adversaire ne guérissent pas de cet État Spécial lorsqu'ils évoluent ou dés-évoluent.",
			'es-es': "Los Pokémon Envenenados de tu rival no se recuperan de esa Condición Especial cuando evolucionan o involucionan.",
			'it-it': "I Pokémon avvelenati del tuo avversario non guariscono da quella condizione speciale quando si evolvono o se ne annulla l'evoluzione.",
			'pt-br': "Os Pokémon Envenenados do seu oponente não se recuperarão daquela Condição Especial quando eles evoluírem ou suas evoluções forem revertidas.",
			'de-de': "Die vergifteten Pokémon deines Gegners erholen sich nicht von jenem Speziellen Zustand, wenn sie sich entwickeln oder rückentwickeln."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Toxic Strike",
			'fr-fr': "Frappe Toxique",
			'es-es': "Golpe Tóxico",
			'it-it': "Attacco Tossico",
			'pt-br': "Golpe Tóxico",
			'de-de': "Giftschlag"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 100
	}],

	retreat: 4,
	regulationMark: "G",
	illustrator: "Haru Akasaka",

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "It's thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
	},

	thirdParty: {
        cardmarket: 702422,
        tcgplayer: 488015
    }
}

export default card
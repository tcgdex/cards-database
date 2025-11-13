import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [945],
	set: Set,

	name: {
		en: "Grafaiai",
		fr: "Tag-Tag",
		es: "Grafaiai",
		it: "Grafaiai",
		pt: "Grafaiai",
		de: "Affiti"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		en: "Shroodle",
		fr: "Gribouraigne",
		es: "Shroodle",
		it: "Shroodle",
		pt: "Shroodle",
		de: "Sproxi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Spit Poison",
			fr: "Crache-Venin",
			es: "Escupir Veneno",
			it: "Sputaveleno",
			pt: "Cuspe Venenoso",
			de: "Giftspucke"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Colorful Graffiti",
			fr: "Graffiti Coloré",
			es: "Grafiti Colorido",
			it: "Graffiti Colorati",
			pt: "Grafite Colorido",
			de: "Buntes Graffiti"
		},

		effect: {
			en: "You may discard as many Basic Energy cards as you like from your hand. This attack does 40 damage for each type of Basic Energy you discarded in this way.",
			fr: "Vous pouvez défausser le nombre voulu de cartes Énergie de base de votre main. Cette attaque inflige 40 dégâts pour chaque type d'Énergie de base défaussée de cette façon.",
			es: "Puedes descartar tantas cartas de Energía Básica de tu mano como quieras. Este ataque hace 40 puntos de daño por cada tipo de Energía Básica que hayas descartado de esta manera.",
			it: "Puoi scartare tutte le carte Energia base che vuoi dalla tua mano. Questo attacco infligge 40 danni per ogni tipo di Energia base che hai scartato in questo modo.",
			pt: "Você pode descartar quantas cartas de Energia Básica desejar da sua mão. Este ataque causa 40 pontos de dano para cada tipo de Energia Básica descartado desta forma.",
			de: "Du kannst beliebig viele Basis-Energiekarten aus deiner Hand auf deinen Ablagestapel legen. Diese Attacke fügt für jeden auf diese Weise auf den Ablagestapel gelegten Basis-Energietyp 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Scav",

	thirdParty: {
		cardmarket: 751729
	}
}

export default card
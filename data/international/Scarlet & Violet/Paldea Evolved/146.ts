import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [945],
	set: Set,

	name: {
		'fr-fr': "Tag-Tag",
		'en-us': "Grafaiai",
		'es-es': "Grafaiai",
		'it-it': "Grafaiai",
		'pt-br': "Grafaiai",
		'de-de': "Affiti"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Gribouraigne",
		'en-us': "Shroodle",
		'es-es': "Shroodle",
		'it-it': "Shroodle",
		'pt-br': "Shroodle",
		'de-de': "Sproxi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Crache-Venin",
			'en-us': "Spit Poison",
			'es-es': "Escupir Veneno",
			'it-it': "Sputaveleno",
			'pt-br': "Cuspe Venenoso",
			'de-de': "Giftspucke"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'fr-fr': "Graffiti Coloré",
			'en-us': "Colorful Graffiti",
			'es-es': "Grafiti Colorido",
			'it-it': "Graffiti Colorati",
			'pt-br': "Grafite Colorido",
			'de-de': "Buntes Graffiti"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser le nombre voulu de cartes Énergie de base de votre main. Cette attaque inflige 40 dégâts pour chaque type d'Énergie de base défaussée de cette façon.",
			'en-us': "You may discard as many Basic Energy cards as you like from your hand. This attack does 40 damage for each type of Basic Energy you discarded in this way.",
			'es-es': "Puedes descartar tantas cartas de Energía Básica de tu mano como quieras. Este ataque hace 40 puntos de daño por cada tipo de Energía Básica que hayas descartado de esta manera.",
			'it-it': "Puoi scartare tutte le carte Energia base che vuoi dalla tua mano. Questo attacco infligge 40 danni per ogni tipo di Energia base che hai scartato in questo modo.",
			'pt-br': "Você pode descartar quantas cartas de Energia Básica desejar da sua mão. Este ataque causa 40 pontos de dano para cada tipo de Energia Básica descartado desta forma.",
			'de-de': "Du kannst beliebig viele Basis-Energiekarten aus deiner Hand auf deinen Ablagestapel legen. Diese Attacke fügt für jeden auf diese Weise auf den Ablagestapel gelegten Basis-Energietyp 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715621,
				tcgplayer: 497661,
				cardtrader: 248798
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715621,
				tcgplayer: 497661,
				cardtrader: 248798
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	description: {
		'en-us': "The color of the poisonous saliva depends on what the Pokémon eats. Grafaiai covers its fingers in its saliva and draws patterns on trees in forests.",
	},
}

export default card

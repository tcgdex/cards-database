import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [31],
	set: Set,

	name: {
		'fr-fr': "Nidoqueen",
		'en-us': "Nidoqueen",
		'es-es': "Nidoqueen",
		'it-it': "Nidoqueen",
		'pt-br': "Nidoqueen",
		'de-de': "Nidoqueen"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Nidorina",
		'en-us': "Nidorina",
		'es-es': "Nidorina",
		'it-it': "Nidorina",
		'pt-br': "Nidorina",
		'de-de': "Nidorina"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Pression de Reine",
			'en-us': "Queen Press",
			'es-es': "Presión Reina",
			'it-it': "Pressa della Regina",
			'pt-br': "Compressão Régia",
			'de-de': "Druck der Königin"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird."
		},

		damage: 90
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'fr-fr': "Allonger",
			'en-us': "Lunge Out",
			'es-es': "Arremeter",
			'it-it': "Affondo Lungo",
			'pt-br': "Bote",
			'de-de': "Sprungangriff"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It pacifies offspring by placing them in the gaps between the spines on its back. The spines will never secrete poison while young are present.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733626,
				tcgplayer: 516004,
				cardtrader: 261197
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733626,
				tcgplayer: 516004,
				cardtrader: 261197
			}
		},
	],

	illustrator: "Teeziro",

	
}

export default card

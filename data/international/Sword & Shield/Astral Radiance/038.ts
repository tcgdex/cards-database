import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali",
		'es-es': "Glaceon",
		'it-it': "Glaceon",
		'pt-br': "Glaceon",
		'de-de': "Glaziola"
	},

	illustrator: "saino misaki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Frost Wall",
			'fr-fr': "Mur de Givre",
			'es-es': "Muro Gélido",
			'it-it': "Murogelo",
			'pt-br': "Muro Congelado",
			'de-de': "Frostwand"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Evolución.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Evoluzione.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon de Evolução.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Entwicklungs-Pokémon zugefügt wird."
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Ice Blast",
			'fr-fr': "Explosion Glacée",
			'es-es': "Ráfaga de Hielo",
			'it-it': "Ghiaccioscoppio",
			'pt-br': "Rajada de Gelo",
			'de-de': "Eis-Blaster"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Glaceon is able to lower its body temperature very quickly. It freezes the atmosphere, creating diamond dust that glitters like gems while it flutters and dances around.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658546,
				tcgplayer: 272238
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658546,
				tcgplayer: 272238
			}
		},
	],
}

export default card

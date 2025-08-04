import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko",
		es: "Sceptile",
		it: "Sceptile",
		pt: "Sceptile",
		de: "Gewaldro"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
		es: "Grovyle",
		it: "Grovyle",
		pt: "Grovyle",
		de: "Reptain"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Nurture and Heal",
				fr: "Nourri-Guéri",
				es: "Nutrir y Sanar",
				it: "Nutrire e Curare",
				pt: "Nutrir e Curar",
				de: "Pflegen und Heilen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Grass Energy card from your hand to 1 of your Pokémon. If you do, heal 30 damage from that Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Grass de votre main à l'un de vos Pokémon. Dans ce cas, soignez 30 dégâts au Pokémon choisi.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Grass de tu mano a 1 de tus Pokémon. Si lo haces, cura 30 puntos de daño a ese Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare una carta Energia Grass che hai in mano a uno dei tuoi Pokémon. Se lo fai, cura quel Pokémon da 30 danni.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Grass da sua mão a 1 dos seus Pokémon. Se fizer isso, cure 30 de danos deste Pokémon.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Grass-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen. Wenn du das machst, heile 30 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jungle Edge",
				fr: "Dague Végétale",
				es: "Filo Selva",
				it: "Giunglama",
				pt: "Borda da Floresta",
				de: "Dschungelschneide"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 273539,
		tcgplayer: 95892
	}
}

export default card

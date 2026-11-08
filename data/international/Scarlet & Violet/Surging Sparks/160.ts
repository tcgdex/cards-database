import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [973],
	set: Set,

	name: {
		'en-us': "Flamigo ex",
		'fr-fr': "Flamenroule-ex",
		'es-es': "Flamigo ex",
		'it-it': "Flamigo-ex",
		'pt-br': "Flamigo ex",
		'de-de': "Flaminkno-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Precise Beak",
			'fr-fr': "Bec Précis",
			'es-es': "Pico Preciso",
			'it-it': "Becco Preciso",
			'pt-br': "Bico de Precisão",
			'de-de': "Präziser Schnabel"
		},

		effect: {
			'en-us': "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached, this attack does 100 more damage.",
			'fr-fr': "Si ce Pokémon et le Pokémon Actif de votre adversaire ont autant d'Énergies attachées, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas, este ataque hace 100 puntos de daño más.",
			'it-it': "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon genauso viel Energie angelegt ist wie an das Aktive Pokémon deines Gegners, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Brave Bird",
			'fr-fr': "Rapace",
			'es-es': "Pájaro Osado",
			'it-it': "Baldeali",
			'pt-br': "Pássaro Bravo",
			'de-de': "Sturzflug"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794533,
				tcgplayer: 589945
			}
		},
	],

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",

}

export default card

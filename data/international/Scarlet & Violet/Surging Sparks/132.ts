import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1023],
	set: Set,

	name: {
		'en-us': "Iron Crown",
		'fr-fr': "Chef-de-Fer",
		'es-es': "Ferrotesta",
		'it-it': "Capoferreo",
		'pt-br': "Chifres Férreos",
		'de-de': "Eisenhaupt"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Deleting Slash",
			'fr-fr': "Tranche Suppression",
			'es-es': "Tajo Formateo",
			'it-it': "Lacerosgombro",
			'pt-br': "Talho Apagador",
			'de-de': "Destruktorschnitt"
		},

		effect: {
			'en-us': "If your opponent has 3 or more Benched Pokémon, this attack does 80 more damage.",
			'fr-fr': "Si votre adversaire a 3 Pokémon de Banc ou plus, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tu rival tiene 3 Pokémon en Banca o más, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il tuo avversario ha tre o più Pokémon in panchina, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o seu oponente tiver 3 ou mais Pokémon no Banco, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner 3 oder mehr Pokémon auf seiner Bank hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Slicing Blade",
			'fr-fr': "Lame Tranchante",
			'es-es': "Cuchilla Cortante",
			'it-it': "Affettalama",
			'pt-br': "Lâmina Fatiante",
			'de-de': "Schwertschneide"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794505,
				tcgplayer: 589970
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794505,
				tcgplayer: 589970
			}
		},
	],

	illustrator: "akagi",

}

export default card

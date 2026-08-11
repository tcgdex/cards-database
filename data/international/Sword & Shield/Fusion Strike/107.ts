import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		'en-us': "Toxtricity",
		'fr-fr': "Salarsen",
		'es-es': "Toxtricity",
		'it-it': "Toxtricity",
		'pt-br': "Toxtricity",
		'de-de': "Riffex"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		'en-us': "This short-tempered and aggressive Pokémon chugs stagnant water to absorb any toxins it might contain."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Punk Shock",
			'fr-fr': "Choc Punk",
			'de-de': "Punk-Schock",
			'es-es': "Sacudida Punki",
			'pt-br': "Punk Choque",
			'it-it': "Shock Punk"
		},

		damage: 70,

		effect: {
			'en-us': "You may choose to make your opponent's Active Pokémon Paralyzed. If you do, this Pokémon also does 70 damage to itself.",
			'fr-fr': "Vous pouvez choisir de laisser le Pokémon Actif de votre adversaire Paralysé. Dans ce cas, ce Pokémon s'inflige aussi 70 dégâts.",
			'de-de': "Du kannst wählen, ob du das Aktive Pokémon deines Gegners paralysierst. Wenn du das machst, fügt dieses Pokémon auch sich selbst 70 Schadenspunkte zu.",
			'es-es': "Puedes elegir dejar al Pokémon Activo de tu rival Paralizado. Si lo haces, este Pokémon también se hace 70 puntos de daño a sí mismo.",
			'pt-br': "Você pode escolher deixar o Pokémon Ativo do seu oponente Paralisado. Se fizer isto, este Pokémon também causará 70 pontos de dano a si mesmo.",
			'it-it': "Puoi scegliere di lasciare il Pokémon attivo del tuo avversario paralizzato. Se lo fai, questo Pokémon infligge anche 70 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582500,
				tcgplayer: 253263
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582500,
				tcgplayer: 253263
			}
		},
	],
}

export default card

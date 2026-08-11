import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [244],
	set: Set,

	name: {
		'en-us': "Entei V",
		'fr-fr': "Entei V",
		'es-es': "Entei V",
		'it-it': "Entei V",
		'pt-br': "Entei V",
		'de-de': "Entei V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fleet-Footed",
			'fr-fr': "Pas Agiles",
			'es-es': "Celeridad",
			'it-it': "Corsalesta",
			'pt-br': "Ligeirinho",
			'de-de': "Leichtfüßig"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may draw a card.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez piocher une carte.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes robar 1 carta.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi pescare una carta.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá comprar 1 carta.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Karte ziehen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Burning Rondo",
			'fr-fr': "Rondo Brûlant",
			'es-es': "Rondó Ardiente",
			'it-it': "Bruciarondò",
			'pt-br': "Cântico Incandescente",
			'de-de': "Feuerrondo"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente).",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608472,
				tcgplayer: 263715
			}
		},
	],
}

export default card

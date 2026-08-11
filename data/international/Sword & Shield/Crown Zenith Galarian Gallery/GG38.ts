import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [245],
	set: Set,

	name: {
		'en-us': "Suicune V",
		'fr-fr': "Suicune V",
		'es-es': "Suicune V",
		'it-it': "Suicune V",
		'pt-br': "Suicune V",
		'de-de': "Suicune V"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
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
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Blizzard Rondo",
			'fr-fr': "Rondo Givrant",
			'es-es': "Rondó Ventisca",
			'it-it': "Borarondò",
			'pt-br': "Cântico da Nevasca",
			'de-de': "Blizzardrondo"
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
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691918,
				tcgplayer: 478067
			}
		},
	],
}

export default card

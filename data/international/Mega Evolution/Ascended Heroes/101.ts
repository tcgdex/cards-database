import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Dugtrio",
		'fr-fr': "Triopikeur de la Team Rocket",
		'es-es': "Dugtrio del Team Rocket",
		'es-mx': "Dugtrio del Equipo Rocket",
		'de-de': "Team Rockets Digdri",
		'it-it': "Dugtrio del Team Rocket",
		'pt-br': "Dugtrio da Equipe Rocket"
	},

	evolveFrom: {
		'en-us': "Team Rocket's Diglett",
		'fr-fr': "Taupiqueur de la Team Rocket",
		'es-es': "Diglett del Team Rocket",
		'es-mx': "Diglett del Equipo Rocket",
		'de-de': "Team Rockets Digda",
		'it-it': "Diglett del Team Rocket",
		'pt-br': "Diglett da Equipe Rocket",
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Holes",
			'fr-fr': "Trous",
			'es-es': "Socavones",
			'es-mx': "Baches",
			'de-de': "Löcher graben",
			'it-it': "Buche",
			'pt-br': "Buracos"
		},

		effect: {
			'en-us': "Whenever your opponent's Active Pokémon moves to the Bench during their turn, place 2 damage counters on that Pokémon.",
			'fr-fr': "Chaque fois que le Pokémon Actif de votre adversaire se déplace vers le Banc pendant son tour, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			'es-es': "Cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, pon 2 contadores de daño en ese Pokémon.",
			'es-mx': "Cada vez que el Pokémon Activo de tu rival se mueva a la Banca durante su turno, pon 2 contadores de daño en ese Pokémon.",
			'de-de': "Lege jedes Mal, wenn das Aktive Pokémon deines Gegners während seines Zuges auf die Bank wechselt, 2 Schadensmarken auf jenes Pokémon.",
			'it-it': "Ogni volta che il Pokémon attivo del tuo avversario si sposta in panchina durante il suo turno, metti due segnalini danno su quel Pokémon.",
			'pt-br': "Sempre que o Pokémon Ativo do seu oponente for movido para o Banco durante o turno dele, coloque 2 contadores de dano naquele Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Mud Shot",
			'fr-fr': "Tir de Boue",
			'es-es': "Disparo Lodo",
			'es-mx': "Disparo de Lodo",
			'de-de': "Lehmschuss",
			'it-it': "Colpodifango",
			'pt-br': "Tiro de Lama"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "In battle, it digs through the ground and strikes the unsuspecting foe from an unexpected direction.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869712,
			tcgplayer: 675913
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870298,
			tcgplayer: 677073
		}
	},
	{
		type: "reverse",
		foil: "team-rocket",
		thirdParty: {
			cardmarket: 870297,
			tcgplayer: 676933
		}
	},
],
}

export default card
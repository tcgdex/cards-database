import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Honchkrow",
		'fr-fr': "Corboss de la Team Rocket",
		'es-es': "Honchkrow del Team Rocket",
		'es-mx': "Honchkrow del Equipo Rocket",
		'de-de': "Team Rockets Kramshef",
		'it-it': "Honchkrow del Team Rocket",
		'pt-br': "Honchkrow da Equipe Rocket"
	},

	evolveFrom: {
		'en-us': "Team Rocket's Murkrow",
		'fr-fr': "Cornèbre de la Team Rocket",
		'es-es': "Murkrow del Team Rocket",
		'es-mx': "Murkrow del Equipo Rocket",
		'de-de': "Team Rockets Kramurx",
		'it-it': "Murkrow del Team Rocket",
		'pt-br': "Murkrow da Equipe Rocket",
	},

	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rocket Feathers",
			'fr-fr': "Plumes Rocket",
			'es-es': "Plumas Rocket",
			'es-mx': "Plumas Rocket",
			'de-de': "Rocket-Federn",
			'it-it': "Piume Rocket",
			'pt-br': "Penas Rocket"
		},

		effect: {
			'en-us': "You may discard any number of Supporter cards that have \"Team Rocket\" in their name from your hand, and this attack does 60 damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser de votre main le nombre voulu de cartes Supporter ayant \" Team Rocket \" dans leur nom. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar de tu mano cualquier cantidad de cartas de Partidario que tengan la palabra \"Team Rocket\" en su nombre, y este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Puedes descartar de tu mano cualquier cantidad de cartas de Partidario que tengan \"Equipo Rocket\" en su nombre, y este ataque hace 60 puntos de daño por cada carta que descartaste de esta manera.",
			'de-de': "Du kannst beliebig viele Unterstützerkarten, bei denen \"Team Rocket\" zum Namen gehört, aus deiner Hand auf deinen Ablagestapel legen, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu.",
			'it-it': "Puoi scartare un numero qualsiasi di carte Aiuto che hanno \"Team Rocket\" nel nome che hai in mano e questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar qualquer número de cartas de Apoiador que têm \"Equipe Rocket\" em seu nome da sua mão, e este ataque causa 60 pontos de dano para cada carta descartada desta forma."
		},

		damage: "60×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'es-mx': "Martillar",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'pt-br': "Martelada"
		},

		damage: 100
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
	regulationMark: "I",

	description: {
		'en-us': "A single cry from this nocturnal Pokémon, and more than 100 of its Murkrow cronies will assemble.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869738,
			tcgplayer: 675939
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870336,
			tcgplayer: 677092
		}
	},
	{
		type: "reverse",
		foil: "team-rocket",
		thirdParty: {
			cardmarket: 870335,
			tcgplayer: 676952
		}
	},
],
}

export default card
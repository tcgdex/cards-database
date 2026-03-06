import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Honchkrow",
		fr: "Corboss de la Team Rocket",
		es: "Honchkrow del Team Rocket",
		'es-mx': "Honchkrow del Equipo Rocket",
		de: "Team Rockets Kramshef",
		it: "Honchkrow del Team Rocket",
		pt: "Honchkrow da Equipe Rocket"
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
			en: "Rocket Feathers",
			fr: "Plumes Rocket",
			es: "Plumas Rocket",
			'es-mx': "Plumas Rocket",
			de: "Rocket-Federn",
			it: "Piume Rocket",
			pt: "Penas Rocket"
		},

		effect: {
			en: "You may discard any number of Supporter cards that have \"Team Rocket\" in their name from your hand, and this attack does 60 damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser de votre main le nombre voulu de cartes Supporter ayant \" Team Rocket \" dans leur nom. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar de tu mano cualquier cantidad de cartas de Partidario que tengan la palabra \"Team Rocket\" en su nombre, y este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Puedes descartar de tu mano cualquier cantidad de cartas de Partidario que tengan \"Equipo Rocket\" en su nombre, y este ataque hace 60 puntos de daño por cada carta que descartaste de esta manera.",
			de: "Du kannst beliebig viele Unterstützerkarten, bei denen \"Team Rocket\" zum Namen gehört, aus deiner Hand auf deinen Ablagestapel legen, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu.",
			it: "Puoi scartare un numero qualsiasi di carte Aiuto che hanno \"Team Rocket\" nel nome che hai in mano e questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar qualquer número de cartas de Apoiador que têm \"Equipe Rocket\" em seu nome da sua mão, e este ataque causa 60 pontos de dano para cada carta descartada desta forma."
		},

		damage: "60×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			'es-mx': "Martillar",
			de: "Einhämmern",
			it: "Martello",
			pt: "Martelada"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675939,
		cardmarket: 869738
	}
}

export default card
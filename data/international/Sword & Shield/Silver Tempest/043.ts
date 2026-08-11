import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [478],
	set: Set,

	name: {
		'en-us': "Froslass",
		'fr-fr': "Momartik",
		'es-es': "Froslass",
		'it-it': "Froslass",
		'pt-br': "Froslass",
		'de-de': "Frosdedje"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Frosty Jail",
			'fr-fr': "Prison Givrée",
			'es-es': "Prisión Glacial",
			'it-it': "Sbarregelo",
			'pt-br': "Prisão Glacial",
			'de-de': "Frostgefängnis"
		},

		effect: {
			'en-us': "If you played Candice from your hand during this turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Si vous avez joué Gladys de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Si has jugado 1 carta de Inverna de tu mano durante este turno, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Se hai giocato Bianca dalla tua mano durante questo turno, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Se você jogou Candice da sua mão durante este turno, este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wenn du Frida während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: "20+"
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Frost Breath",
			'fr-fr': "Souffle Glacé",
			'es-es': "Vaho Gélido",
			'it-it': "Alitogelido",
			'pt-br': "Respiração de Gelo",
			'de-de': "Eisesodem"
		},

		damage: 60
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
		'en-us': "After a woman met her end on a snowy mountain, her regrets lingered on. From them, this Pokémon was born. Its favorite food is frozen souls.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682089,
				tcgplayer: 451683
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682089,
				tcgplayer: 451683
			}
		},
	],
}

export default card

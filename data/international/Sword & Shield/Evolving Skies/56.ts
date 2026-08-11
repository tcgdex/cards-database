import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Ampharos",
		'fr-fr': "Pharamp",
		'es-es': "Ampharos",
		'it-it': "Ampharos",
		'pt-br': "Ampharos",
		'de-de': "Ampharos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],
	stage: "Stage2",
	illustrator: "Saya Tsuruta",

	attacks: [{
		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'it-it': "Tuonoshock",
			'pt-br': "Thunder Shock",
			'de-de': "Donnerschock"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Electron Crush",
			'fr-fr': "Électron Écrasant",
			'es-es': "Machaque Electrón",
			'it-it': "Elettrostritolamento",
			'pt-br': "Electron Crush",
			'de-de': "Zerquetschende Elektronen"
		},

		effect: {
			'en-us': "You may discard 3 Lightning Energy from this Pokémon. If you do, this attack does 120 more damage.",
			'fr-fr': "Vous pouvez défausser 3 Énergies Lightning de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Puedes descartar 3 Energías Lightning de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más.",
			'it-it': "Puoi scartare tre Energie Lightning da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più.",
			'pt-br': "You may discard 3 Lightning Energy from this Pokémon. If you do, this attack does 120 more damage.",
			'de-de': "Du kannst 3 Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},

	description: {
		'en-us': "Its tail shines bright and strong. It has been prized since long ago as a beacon for sailors."
	},

	dexId: [181],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574080,
				tcgplayer: 246898
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574080,
				tcgplayer: 246898
			}
		},
	],
}

export default card

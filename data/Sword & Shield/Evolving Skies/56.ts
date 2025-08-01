import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Ampharos",
		fr: "Pharamp",
		es: "Ampharos",
		it: "Ampharos",
		pt: "Ampharos",
		de: "Ampharos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],
	stage: "Stage2",
	illustrator: "Saya Tsuruta",

	attacks: [{
		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			es: "Impactrueno",
			it: "Tuonoshock",
			pt: "Thunder Shock",
			de: "Donnerschock"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Electron Crush",
			fr: "Électron Écrasant",
			es: "Machaque Electrón",
			it: "Elettrostritolamento",
			pt: "Electron Crush",
			de: "Zerquetschende Elektronen"
		},

		effect: {
			en: "You may discard 3 Lightning Energy from this Pokémon. If you do, this attack does 120 more damage.",
			fr: "Vous pouvez défausser 3 Énergies Lightning de ce Pokémon. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Puedes descartar 3 Energías Lightning de este Pokémon. Si lo haces, este ataque hace 120 puntos de daño más.",
			it: "Puoi scartare tre Energie Lightning da questo Pokémon. Se lo fai, questo attacco infligge 120 danni in più.",
			pt: "You may discard 3 Lightning Energy from this Pokémon. If you do, this attack does 120 more damage.",
			de: "Du kannst 3 Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
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
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},

	description: {
		en: "Its tail shines bright and strong. It has been prized since long ago as a beacon for sailors."
	},

	dexId: [181],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574080
	}
}

export default card

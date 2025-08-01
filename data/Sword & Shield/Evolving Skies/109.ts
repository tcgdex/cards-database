import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Salamence",
		fr: "Drattak",
		es: "Salamence",
		it: "Salamence",
		pt: "Salamence",
		de: "Brutalanda"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	stage: "Stage2",
	illustrator: "kodama",

	abilities: [{
		type: "Ability",

		name: {
			en: "Intimidating Roar",
			fr: "Rugissement Intimidant",
			es: "Rugido Intimidatorio",
			it: "Spaventaruggito",
			pt: "Intimidating Roar",
			de: "Einschüchterndes Gebrüll"
		},

		effect: {
			en: "Once during your turn, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez demander à votre adversaire d'échanger son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			es: "Una vez durante tu turno, puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
			it: "Una sola volta durante il tuo turno, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno della sua panchina.",
			pt: "Once during your turn, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			de: "Einmal während deines Zuges kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
		}
	}],

	attacks: [{
		name: {
			en: "Fierce Dragon",
			fr: "Dragon Féroce",
			es: "Dragón Feroz",
			it: "Drago Feroce",
			pt: "Fierce Dragon",
			de: "Wütender Drache"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 120 danni in più.",
			pt: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Fire", "Water"]
	}],

	retreat: 2,
	dexId: [373],

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
		es: "Shelgon",
		it: "Shelgon",
		pt: "Shelgon",
		de: "Draschel"
	},

	description: {
		en: "Thanks to its fervent wishes, the cells in its body finally mutated, and at last it has its heart's desire—wings."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574157
	}
}

export default card

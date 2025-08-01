import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [354],
	set: Set,

	name: {
		en: "Banette",
		fr: "Branette",
		es: "Banette",
		it: "Banette",
		pt: "Banette",
		de: "Banette"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet",
		de: "Shuppet"
	},

	attacks: [{
		name: {
			en: "Resolute Spite",
			fr: "Mépris Inflexible",
			es: "Rencor Audaz",
			it: "Dispetto Risoluto",
			pt: "Rancor Resoluto",
			de: "Resoluter Groll"
		},

		effect: {
			en: "Put up to 7 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
			fr: "Placez jusqu'à 7 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon.",
			es: "Pon hasta 7 contadores de daño en este Pokémon. Este ataque hace 20 puntos de daño por cada contador de daño que hayas colocado de esta manera.",
			it: "Metti fino a sette segnalini danno su questo Pokémon. Questo attacco infligge 20 danni per ogni segnalino danno che hai messo in questo modo.",
			pt: "Coloque até 7 contadores de dano neste Pokémon. Este ataque causa 20 pontos de dano para cada contador de dano colocado desta forma.",
			de: "Lege bis zu 7 Schadensmarken auf dieses Pokémon. Diese Attacke fügt für jede auf diese Weise platzierte Schadensmarke 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Psychic"]
	}, {
		name: {
			en: "Eerie Light",
			fr: "Lumière Étrange",
			es: "Luz Lúgubre",
			it: "Luci Inquietanti",
			pt: "Luz Misteriosa",
			de: "Gespenstisches Licht"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Resentment at being cast off made it spring into being. Some say that treating it well will satisfy it, and it will once more become a stuffed toy."
	},

	thirdParty: {
		cardmarket: 567171
	}
}

export default card
